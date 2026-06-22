import { readdirSync, writeFileSync } from "node:fs";

const fields = readdirSync("registry/fields")
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""));

const items = {
  types: { files: ["types.ts"] },
  canvas: { files: ["ascii-field.tsx"], deps: ["types"], npm: ["react"] },
};
for (const name of fields) {
  items[name] = { files: [`fields/${name}.ts`], deps: ["types"] };
}

writeFileSync("registry/registry.json", JSON.stringify({ items }, null, 2));
console.log(`registry.json: ${fields.length} fields + types + canvas`);
