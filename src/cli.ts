#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const RAW = "https://raw.githubusercontent.com/ashmitjsg/charfield/main/registry";

type Item = { files: string[]; deps?: string[]; npm?: string[] };
type Registry = { items: Record<string, Item> };

async function getRegistry(): Promise<Registry> {
  const res = await fetch(`${RAW}/registry.json`);
  if (!res.ok) throw new Error(`registry fetch failed (${res.status})`);
  return res.json() as Promise<Registry>;
}

async function fetchFile(path: string): Promise<string> {
  const res = await fetch(`${RAW}/${path}`);
  if (!res.ok) throw new Error(`file fetch failed: ${path} (${res.status})`);
  return res.text();
}

// resolve an item + its deps into an ordered, de-duped list (deps first)
function resolve(reg: Registry, names: string[], seen = new Set<string>()): string[] {
  for (const n of names) {
    const item = reg.items[n];
    if (!item) throw new Error(`unknown item: "${n}" (try: charfield list)`);
    resolve(reg, item.deps ?? [], seen);
    seen.add(n);
  }
  return [...seen];
}

async function add(names: string[], dir: string): Promise<void> {
  const reg = await getRegistry();
  const keys = resolve(reg, names);
  const npm = new Set<string>();
  console.log(`Adding to ${dir}/`);
  for (const k of keys) {
    for (const f of reg.items[k].files) {
      const out = join(dir, f);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, await fetchFile(f));
      console.log("  +", out);
    }
    (reg.items[k].npm ?? []).forEach((p) => npm.add(p));
  }
  if (npm.size) console.log(`\nPeer deps:\n  npm i ${[...npm].join(" ")}`);
}

async function list(): Promise<void> {
  const reg = await getRegistry();
  const names = Object.keys(reg.items).filter(
    (k) => k !== "types" && k !== "canvas"
  );
  console.log("Components: canvas");
  console.log("Fields:\n  " + names.join("  "));
}

async function main(): Promise<void> {
  const [cmd, ...rest] = process.argv.slice(2);
  const di = rest.indexOf("--dir");
  const dir =
    di >= 0 ? rest[di + 1] : existsSync("src") ? "src/charfield" : "charfield";
  const names = rest.filter((a, i) => !a.startsWith("--") && i !== di + 1);

  if (cmd === "add" && names.length) await add(names, dir);
  else if (cmd === "list") await list();
  else
    console.log(
      "Usage:\n  charfield list\n  charfield add <name...> [--dir <path>]"
    );
}

main().catch((e: unknown) => {
  console.error("error:", e instanceof Error ? e.message : e);
  process.exit(1);
});
