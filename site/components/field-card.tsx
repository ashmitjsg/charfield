"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import AsciiField from "@/registry/ascii-field";
import { FIELD_MAP } from "@/registry/field-map";
import type { Demo } from "@/lib/demos";

export function FieldCard({ demo }: { demo: Demo }) {
  const field = FIELD_MAP[demo.name];
  const [copied, setCopied] = useState(false);
  const cmd = `npx charfield add ${demo.name}`;

  const copy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    toast.success(`Copied: ${cmd}`);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative h-72 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(60%_60%_at_50%_60%,#0e2620_0%,#0a0b0d_100%)]">
      {field && (
        <AsciiField
          field={field}
          cell={8}
          radius={90}
          color="#22c58a"
          dim="rgba(34,197,138,0.16)"
        />
      )}

      {/* copy `npx charfield add <name>` */}
      <button
        onClick={copy}
        title={cmd}
        aria-label={cmd}
        className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-black/50 p-1.5 text-neutral-300 opacity-0 backdrop-blur transition hover:text-white group-hover:opacity-100 focus-visible:opacity-100"
      >
        {copied ? <Check className="size-4 text-[#5fe0ab]" /> : <Copy className="size-4" />}
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#22c58a]/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#5fe0ab]">
            {demo.domain}
          </span>
          <code className="text-[11px] text-neutral-500">{demo.name}</code>
        </div>
        <h2 className="mt-1 text-lg font-medium">{demo.title}</h2>
        <p className="text-xs leading-snug text-neutral-400">{demo.blurb}</p>
      </div>
    </div>
  );
}
