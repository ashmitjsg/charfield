# charfield

Copy-in registry + CLI for **ASCII canvas field animations** — interactive, mouse-reactive
procedural backgrounds rendered as ASCII glyphs. Pull in only the animations you need:

```bash
npx charfield add galaxy
```

No runtime dependency. The source files are copied **into your repo**, so you own them and
can tweak the math, colors, and speed freely (shadcn-style).

## Usage

```bash
npx charfield list                  # show all available fields + the canvas component
npx charfield add galaxy            # copy the galaxy field (+ shared types) into your project
npx charfield add canvas blackhole  # the render component + a field
npx charfield add galaxy --dir lib/charfield   # custom target directory
```

By default files land in `src/charfield/` (or `charfield/` if you have no `src/`).

## Render it

The `canvas` component takes a `field` function and fills its positioned parent:

```tsx
import AsciiField from "@/charfield/ascii-field";
import { galaxy } from "@/charfield/fields/galaxy";

export default function Hero() {
  return (
    <div className="relative h-96">
      <AsciiField field={galaxy} color="#7fc8ff" cell={8} />
    </div>
  );
}
```

Props: `field`, `src` (image → ASCII portrait), `cell`, `color`, `dim`, `radius`, `speed`,
`interactive`, `className`.

## Fields

40+ procedural fields across astro, quantum, condensed-matter, nonlinear, and field-theory
themes (galaxy, blackhole, entanglement, blochsphere, lorenz, ising, feynman, …).
Run `npx charfield list` for the full set.

## How it works

The CLI fetches a small `registry.json` + the requested source files from this repo and
writes them into your project, resolving shared deps (e.g. `types.ts`) automatically. Peer
deps (React for the component) are printed for you to install.

## License

MIT © [Ashmit JaiSarita Gupta](https://ashmitjsg.vercel.app/)
