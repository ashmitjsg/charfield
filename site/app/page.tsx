import { DEMOS } from "@/lib/demos";
import { FieldCard } from "@/components/field-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight">charfield</h1>
        <p className="mt-2 max-w-2xl text-neutral-400">
          Interactive ASCII canvas field animations. Copy-in, no runtime
          dependency - pull only the ones you need. Hover any tile; the cursor is a
          gravity well.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <code className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-sm">
            <span className="text-neutral-500">$</span> npx charfield add flowfield
          </code>
          <span className="text-sm text-neutral-500">{DEMOS.length} fields</span>
          <a
            href="https://www.npmjs.com/package/charfield"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5fe0ab] underline-offset-4 hover:underline"
          >
            npm
          </a>
          <a
            href="https://github.com/ashmitjsg/charfield"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5fe0ab] underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((d) => (
            <FieldCard key={d.name} demo={d} />
          ))}
        </div>
      </div>
    </main>
  );
}
