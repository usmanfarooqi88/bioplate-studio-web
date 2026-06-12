'use client';

import {
  BadgeCheck,
  Crop,
  Download,
  FileImage,
  FileText,
  Grid3X3,
  Image as ImageIcon,
  Layers,
  Microscope,
  Move,
  Printer,
  Ruler,
  Settings,
  SlidersHorizontal,
  Sparkle,
  Tags,
  Type,
  type LucideIcon,
} from 'lucide-react';
import { memo } from 'react';

const MARQUEE_ROW_1: LucideIcon[] = [
  Ruler,
  Type,
  ImageIcon,
  FileImage,
  FileText,
  Download,
  Printer,
  Settings,
];

const MARQUEE_ROW_2: LucideIcon[] = [
  Microscope,
  Crop,
  Move,
  Layers,
  Grid3X3,
  SlidersHorizontal,
  BadgeCheck,
  Sparkle,
];

function LabelWithSparkles({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2">
      <Sparkle className="h-3 w-3 text-amber-300/80" strokeWidth={1.5} aria-hidden />
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
        {children}
      </span>
      <Sparkle className="h-3 w-3 text-amber-300/80" strokeWidth={1.5} aria-hidden />
    </div>
  );
}

function MarqueeRow({
  icons,
  direction,
}: {
  icons: LucideIcon[];
  direction: 'left' | 'right';
}) {
  const doubled = [...icons, ...icons];
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-hidden
    >
      <div
        className={`flex w-max gap-3 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {doubled.map((Icon, i) => (
          <div
            key={i}
            className="liquid-glass flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 md:h-16 md:w-16"
          >
            <Icon className="h-5 w-5 text-white/75 md:h-6 md:w-6" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MyceliumAnimatedBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 mycelium-bg opacity-50" />
      <div className="scientific-grid absolute inset-0 opacity-40" />
      <div className="absolute -left-10 top-[18%] h-44 w-44 rounded-full bg-violet-500/25 blur-3xl animate-pulse" />
      <div className="absolute right-[-5%] top-[8%] h-52 w-52 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute bottom-[12%] left-[30%] h-40 w-40 rounded-full bg-amber-500/15 blur-3xl" />
      {/* Mushroom silhouette outlines */}
      <svg
        className="absolute bottom-[8%] left-[6%] h-36 w-36 opacity-[0.12]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <ellipse cx="60" cy="78" rx="38" ry="28" stroke="white" strokeWidth="1.2" />
        <path
          d="M60 78V98M42 98h36"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M28 72C28 42 44 22 60 22s32 20 32 50"
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
      <svg
        className="absolute right-[10%] top-[22%] h-28 w-28 opacity-[0.1]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <ellipse cx="60" cy="76" rx="30" ry="22" stroke="white" strokeWidth="1" />
        <path d="M60 76V94" stroke="white" strokeWidth="0.9" />
        <path d="M34 70C34 48 48 34 60 34s26 14 26 36" stroke="white" strokeWidth="1" />
      </svg>
      {/* Mycelium lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 400 400">
        <path
          d="M20 200 Q80 120 140 200 T260 200 T380 180"
          stroke="rgba(139,92,246,0.6)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M40 280 Q120 220 200 280 T360 260"
          stroke="rgba(45,212,191,0.5)"
          strokeWidth="0.7"
          fill="none"
        />
        <path
          d="M60 120 Q140 80 220 130 T340 100"
          stroke="rgba(245,158,11,0.4)"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
      {/* Floating spores */}
      {[
        { left: '12%', top: '20%', delay: '0s' },
        { left: '68%', top: '35%', delay: '1.2s' },
        { left: '45%', top: '55%', delay: '2.4s' },
        { left: '82%', top: '62%', delay: '0.8s' },
        { left: '28%', top: '72%', delay: '1.8s' },
        { left: '55%', top: '28%', delay: '3s' },
      ].map((s, i) => (
        <span
          key={i}
          className="spore-particle absolute h-1 w-1 rounded-full bg-amber-200/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}

function GutterDiagram() {
  return (
    <div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4" aria-hidden>
      <div className="flex h-28 gap-1">
        <div className="relative flex-[1.1] rounded-md border border-white/15 bg-white/[0.04]" />
        <div className="relative w-2 shrink-0 rounded-sm bg-blue-500/70 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
        <div className="relative flex-1 rounded-md border border-white/15 bg-white/[0.04]" />
        <div className="relative w-1.5 shrink-0 rounded-sm bg-violet-500/60" />
        <div className="relative flex-[0.85] rounded-md border border-white/15 bg-white/[0.04]" />
      </div>
      <div className="absolute left-3 right-3 top-[46%] h-1.5 rounded-full bg-blue-400/80 shadow-[0_0_14px_rgba(96,165,250,0.55)]" />
      <div className="absolute bottom-3 left-3 right-3 flex gap-1 text-[9px] uppercase tracking-wider text-white/40">
        <span>Row gutter</span>
        <span className="ml-auto text-violet-300/70">Panel gutter</span>
      </div>
    </div>
  );
}

function SnapCardBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0d1117]/60 to-black/50" />
      {[18, 38, 58, 78].map((left) => (
        <div
          key={left}
          className="absolute bottom-0 top-0 w-px bg-white/[0.07]"
          style={{ left: `${left}%` }}
        />
      ))}
      <div className="absolute bottom-0 top-0 left-[38%] w-px bg-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.4)] snap-line-pulse" />
      <div className="absolute bottom-0 top-0 left-[40%] w-px bg-violet-400/40 animate-pulse" />
      <div className="absolute left-[36%] top-1/2 h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
      {[12, 45, 70, 88].map((top, i) => (
        <span
          key={i}
          className="spore-particle absolute h-0.5 w-0.5 rounded-full bg-white/40"
          style={{ left: `${20 + i * 18}%`, top: `${top}%`, animationDelay: `${i * 0.7}s` }}
        />
      ))}
    </div>
  );
}

function MicroscopyCardBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1210]/70 via-black/40 to-[#0a0f14]/70" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 40%, rgba(45,212,191,0.15) 0%, transparent 45%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.12) 0%, transparent 40%)',
        }}
      />
      <div className="scientific-grid absolute inset-0 opacity-25" />
      <div className="absolute bottom-[28%] left-[8%] right-[8%] h-px bg-white/20" />
      <div className="absolute bottom-[26%] left-[10%] flex items-end gap-1">
        {[4, 8, 12, 8, 4].map((h, i) => (
          <div
            key={i}
            className="w-px bg-white/50"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
      <div className="absolute bottom-[24%] left-[10%] rounded bg-black/60 px-2 py-0.5 text-[9px] tracking-wide text-white/60">
        50 µm
      </div>
    </div>
  );
}

const LAYOUT_FEATURES = [
  {
    icon: Grid3X3,
    title: 'Custom rows & panels',
    detail: 'Flexible grid structure',
  },
  {
    icon: Tags,
    title: 'Automatic A–Z labeling',
    detail: 'Publication-ready lettering',
  },
  {
    icon: SlidersHorizontal,
    title: 'Adjustable margins & gutters',
    detail: 'Precise plate spacing',
  },
] as const;

const GUTTER_BULLETS = [
  'Row height resizing',
  'Local two-panel width resizing',
  'Clean aligned gutters',
] as const;

const BATCH_FEATURES = [
  'Batch image import',
  'Empty panel auto-fill',
  'Rearrange labels A–Z',
  'Fast export workflow',
] as const;

function FeaturesComponent() {
  return (
    <section
      id="features"
      className="relative flex min-h-screen flex-col overflow-hidden bg-transparent px-4 py-6 font-sans text-white antialiased sm:px-6 sm:py-8 md:px-10 md:py-10 lg:h-screen lg:px-14"
      aria-labelledby="features-main-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/35"
        aria-hidden
      />
      {/* Header */}
      <header className="relative z-10 mb-5 shrink-0 md:mb-6">
        <h2
          id="features-main-heading"
          className="max-w-4xl text-[28px] font-normal leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[44px]"
        >
          Design Scientific Plates Faster
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-[1.6] text-white/60 md:text-[15px]">
          BioPlate Studio helps researchers, mycologists, and microscopy
          professionals create clean, publication-ready image plates with
          flexible layouts, smart resizing, precise scale bars, and
          high-resolution export.
        </p>
      </header>

      {/* Grid */}
      <div className="relative z-10 grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">
        {/* Column 1 — Smart Layouts */}
        <article className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md lg:min-h-0">
          <MyceliumAnimatedBg />
          <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
            <div className="flex justify-center pt-2">
              <LabelWithSparkles>Smart Layouts</LabelWithSparkles>
            </div>
            <div className="mt-auto space-y-4">
              <div>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                  Flexible Multi-Panel Plates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Create custom scientific plate layouts with rows, panels,
                  gutters, margins, and automatic alphabetical labeling.
                </p>
              </div>
              <ul className="space-y-3 border-t border-white/10 pt-4">
                {LAYOUT_FEATURES.map(({ icon: Icon, title, detail }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="liquid-glass mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10">
                      <Icon className="h-3.5 w-3.5 text-teal-300/90" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-sm text-white/90">{title}</p>
                      <p className="text-xs text-white/45">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Column 2 — Stacked */}
        <div className="flex flex-col gap-4 md:grid md:grid-rows-[auto_1fr] md:gap-5 lg:min-h-0">
          {/* Gutter Resizing */}
          <article className="noise-overlay relative overflow-hidden rounded-2xl border border-white/10 bg-[#263838]/55 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-6">
            <LabelWithSparkles>Gutter Resizing</LabelWithSparkles>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-[15px]">
              Resize scientific plates like a layout editor. Adjust full row
              heights or fine-tune adjacent panel widths using intuitive gutter
              handles.
            </p>
            <GutterDiagram />
            <ul className="mt-4 space-y-1.5">
              {GUTTER_BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-white/55 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-blue-400/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Snap */}
          <article className="relative flex min-h-[260px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <SnapCardBg />
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-6">
              <p
                className="select-none text-5xl font-light tracking-tight drop-shadow-[0_8px_32px_rgba(255,255,255,0.15)] sm:text-6xl md:text-7xl lg:text-[88px]"
                aria-hidden
              >
                Snap
              </p>
            </div>
            <div className="relative z-10 space-y-4 border-t border-white/10 bg-black/35 px-5 py-4 backdrop-blur-md md:px-6">
              <p className="text-center text-sm text-white/60">
                Align nearby gutter lines automatically while resizing.
              </p>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div>
                  <p className="text-sm text-white/90">Gutter Snapping</p>
                  <p className="text-xs text-white/45">
                    Enable or disable from settings.
                  </p>
                </div>
                <div
                  className="relative h-6 w-11 shrink-0 rounded-full bg-teal-500/80 shadow-[0_0_16px_rgba(45,212,191,0.4)]"
                  role="presentation"
                  aria-hidden
                >
                  <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md" />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Column 3 — Stacked */}
        <div className="flex flex-col gap-4 md:gap-5 lg:min-h-0">
          {/* Scale Bars & Export */}
          <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md lg:min-h-0 lg:flex-1">
            <MicroscopyCardBg />
            <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
              <LabelWithSparkles>Publication Tools</LabelWithSparkles>
              <div className="mt-auto space-y-4">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    Scale Bars & 300 DPI Export
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Add professional scale bars, control labels, and export
                    publication-ready plates as PNG, JPEG, or PDF.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <MarqueeRow icons={MARQUEE_ROW_1} direction="left" />
                  <MarqueeRow icons={MARQUEE_ROW_2} direction="right" />
                </div>
              </div>
            </div>
          </article>

          {/* Batch Workflow */}
          <article className="noise-overlay relative overflow-hidden rounded-2xl border border-white/10 bg-[#324444]/55 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-6">
            <LabelWithSparkles>Batch Workflow</LabelWithSparkles>
            <h3 className="mt-4 text-xl font-medium tracking-tight">
              Import. Arrange. Export.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Drop in multiple microscopy images and let BioPlate Studio fill
              empty panels in order, ready for quick editing and export.
            </p>
            <ul className="mt-4 space-y-2">
              {BATCH_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/75 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-teal-400/70"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/45">
              Built for microscopy plates, morphology figures, and mycology
              documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export const Features = memo(FeaturesComponent);
