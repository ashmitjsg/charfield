"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import AsciiField from "@/registry/ascii-field";
import { FIELD_MAP, FIELD_NAMES } from "@/registry/field-map";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PlaygroundPage() {
  const [name, setName] = useState("flowfield");
  const [cell, setCell] = useState(8);
  const [speed, setSpeed] = useState(1);
  const [radius, setRadius] = useState(110);
  const [color, setColor] = useState("#22c58a");
  const [interactive, setInteractive] = useState(true);
  const [bg, setBg] = useState("#0a0b0d");
  const [copied, setCopied] = useState(false);
  const [snipCopied, setSnipCopied] = useState(false);

  const field = FIELD_MAP[name];
  const cmd = `npx charfield add ${name}`;

  const snippet = `<AsciiField
  field={${name}}
  cell={${cell}}
  speed={${speed}}
  radius={${radius}}
  color="${color}"${interactive ? "" : "\n  interactive={false}"}
/>`;

  const copyCmd = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    toast.success(`Copied: ${cmd}`);
    setTimeout(() => setCopied(false), 1500);
  };

  const copySnippet = async () => {
    await navigator.clipboard.writeText(snippet);
    setSnipCopied(true);
    toast.success("Copied snippet");
    setTimeout(() => setSnipCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-[#0a0b0d] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold tracking-tight">Playground</h1>
          <Link
            href="/"
            className="text-sm text-[#5fe0ab] underline-offset-4 hover:underline"
          >
            ← gallery
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-neutral-400">
          Tweak the props live. The cursor is a gravity well - hover the canvas.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* live preview */}
          <div
            className="relative h-[460px] overflow-hidden rounded-xl border border-white/10"
            style={{ background: bg }}
          >
            {field && (
              <AsciiField
                field={field}
                cell={cell}
                speed={speed}
                radius={radius}
                color={color}
                dim={`${color}28`}
                interactive={interactive}
              />
            )}
          </div>

          {/* controls */}
          <div className="space-y-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="space-y-2">
              <Label>Field</Label>
              <Select value={name} onValueChange={(v) => v && setName(v)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {FIELD_NAMES.map((n) => (
                    <SelectItem key={n} value={n}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <SliderRow label="Cell" value={cell} min={4} max={20} step={1} onChange={setCell} />
            <SliderRow label="Speed" value={speed} min={0} max={3} step={0.1} onChange={setSpeed} />
            <SliderRow label="Radius" value={radius} min={0} max={240} step={10} onChange={setRadius} />

            <div className="flex items-center justify-between">
              <Label htmlFor="color">Color</Label>
              <input
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-8 w-12 cursor-pointer rounded border border-white/10 bg-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="bg" className="flex flex-col items-start gap-0.5">
                Background
                <span className="text-[10px] font-normal text-neutral-500">
                  preview only
                </span>
              </Label>
              <input
                id="bg"
                type="color"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="h-8 w-12 cursor-pointer rounded border border-white/10 bg-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="interactive">Interactive</Label>
              <Switch
                id="interactive"
                checked={interactive}
                onCheckedChange={setInteractive}
                className="data-checked:bg-[#22c58a]"
              />
            </div>

            <button
              onClick={copyCmd}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#22c58a]/40 bg-[#22c58a]/15 px-3 py-2 font-mono text-sm text-[#5fe0ab] transition hover:bg-[#22c58a]/25"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {cmd}
            </button>
          </div>
        </div>

        {/* usage snippet */}
        <div className="group relative mt-6">
          <button
            onClick={copySnippet}
            title="Copy snippet"
            aria-label="Copy snippet"
            className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-black/50 p-1.5 text-neutral-300 opacity-0 backdrop-blur transition hover:text-white group-hover:opacity-100 focus-visible:opacity-100"
          >
            {snipCopied ? (
              <Check className="size-4 text-[#5fe0ab]" />
            ) : (
              <Copy className="size-4" />
            )}
          </button>
          <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm text-neutral-300">
            {snippet}
          </pre>
        </div>
      </div>
    </main>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <span className="font-mono text-xs text-neutral-400">{value}</span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
        className="[&_[data-slot=slider-track]]:bg-white/15 [&_[data-slot=slider-range]]:bg-[#22c58a]"
      />
    </div>
  );
}
