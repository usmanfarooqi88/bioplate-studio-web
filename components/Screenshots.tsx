import Image from 'next/image';
import { memo } from 'react';

type FeatureShot = {
  kicker: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  glowFrom: string;
  glowVia: string;
  borderAccent: string;
};

const FEATURES: FeatureShot[] = [
  {
    kicker: 'Canvas & grid',
    title: 'Start from a clean plate layout',
    description:
      'Pick 2×2, 3×3, or 4×4 presets or dial in rows, columns, margin, and gutter. Generate the grid and label panels A–Z in one pass.',
    imageSrc: '/screenshots/app_screen_1.jpg',
    imageAlt: 'BioPlate Studio empty 3×3 grid on canvas',
    glowFrom: 'from-purple-600/50',
    glowVia: 'via-violet-500/25',
    borderAccent: 'group-hover:border-purple-400/40',
  },
  {
    kicker: 'Per-panel editing',
    title: 'Refine every panel like a pro layout tool',
    description:
      'Select a panel to add images, tune labels, duplicate or remove panels, and keep contrast chips readable on any background.',
    imageSrc: '/screenshots/app_screen_2.jpg',
    imageAlt: 'BioPlate Studio panel selected with inspector sidebar',
    glowFrom: 'from-sky-500/45',
    glowVia: 'via-blue-500/20',
    borderAccent: 'group-hover:border-sky-400/40',
  },
  {
    kicker: 'Batch import',
    title: 'Drop in a folder—panels fill in order',
    description:
      'Import JPG, PNG, WebP, or PSD in bulk. Images land in empty slots sequentially so multi-panel figures come together fast.',
    imageSrc: '/screenshots/app_screen_3.jpg',
    imageAlt: 'BioPlate Studio plate filled with microscopy images',
    glowFrom: 'from-teal-500/45',
    glowVia: 'via-cyan-400/20',
    borderAccent: 'group-hover:border-teal-400/40',
  },
  {
    kicker: 'Scale bars',
    title: 'Publication-ready scale bars per panel',
    description:
      'Toggle scale bars, choose print presets from millimeters to centimeters, set orientation, thickness, color, and apply across all panels.',
    imageSrc: '/screenshots/app_screen_5.jpg',
    imageAlt: 'BioPlate Studio scale bar settings in sidebar',
    glowFrom: 'from-fuchsia-500/45',
    glowVia: 'via-pink-500/20',
    borderAccent: 'group-hover:border-fuchsia-400/40',
  },
  {
    kicker: 'Preferences',
    title: 'Defaults that match your lab workflow',
    description:
      'Auto-relabeling, label case, scale bar mode, label style defaults, safety prompts, and display options—saved for every session.',
    imageSrc: '/screenshots/app_screen_6.jpg',
    imageAlt: 'BioPlate Studio preferences window',
    glowFrom: 'from-indigo-500/45',
    glowVia: 'via-purple-500/25',
    borderAccent: 'group-hover:border-indigo-400/40',
  },
];

function ScreenshotsComponent() {
  return (
    <section
      id="features"
      className="relative scroll-mt-6 overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[480px] w-[480px] rounded-full bg-teal-500/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400/90">
            Inside the app
          </p>
          <h2
            id="features-heading"
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Built for plates that ship in journals
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            A quick tour of the desktop workflow—grid, import, polish, and
            export—with the same dark UI you use in the lab.
          </p>
        </header>

        <div className="flex flex-col gap-20 md:gap-28">
          {FEATURES.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageBlock = (
              <div
                className={`relative min-w-0 flex-1 ${!isEven ? 'max-md:order-1' : ''}`}
              >
                <div
                  className={`pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br ${item.glowFrom} ${item.glowVia} to-transparent opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div
                  className={`group/image relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-out will-change-transform hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_32px_90px_-20px_rgba(147,51,234,0.25),0_24px_60px_-24px_rgba(20,184,166,0.12)] ${item.borderAccent}`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-white/[0.04]" />
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            );

            const textBlock = (
              <div
                className={`flex min-w-0 flex-1 flex-col justify-center ${!isEven ? 'max-md:order-2' : ''}`}
              >
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-[0_12px_48px_-12px_rgba(147,51,234,0.15)] sm:p-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-300/90">
                    {item.kicker}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );

            return (
              <article
                key={item.imageSrc}
                className="group relative grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-16"
              >
                {isEven ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Screenshots = memo(ScreenshotsComponent);
