import { memo } from 'react';

/**
 * Feature grid describing core BioPlate Studio capabilities.
 */
function FeaturesComponent() {
  const features = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
          />
        </svg>
      ),
      title: 'Multi-Panel Layouts',
      description:
        'Create custom grid layouts from 2×2 to 10×10 panels with automatic alphabetical labeling',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Publication-Ready Scale Bars',
      description:
        'Add professional scale bars with preset sizes (10µm to 5cm) in any orientation',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'High-Resolution Export',
      description:
        'Export to PNG, JPEG, or PDF at 300 DPI for journal-quality publications',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: 'Flexible Editing',
      description:
        'Merge panels, swap positions, and rearrange labels with drag-and-drop simplicity',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
          />
        </svg>
      ),
      title: 'Batch Image Import',
      description:
        'Import multiple images at once—they automatically fill panels in order',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: 'Customizable Everything',
      description:
        'Fine-tune margins, gutters, panel dimensions, and scale bar appearance',
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-black via-purple-950/10 to-black px-6 pb-24 pt-0"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Designed specifically for mycologists and biological researchers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.65)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-purple-400/35 hover:bg-gradient-to-b hover:from-white/[0.09] hover:to-white/[0.04] hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.35),0_12px_40px_-16px_rgba(0,0,0,0.8)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70" />

              <div className="mb-6 inline-flex rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-800 p-[2px] text-white shadow-lg shadow-purple-900/60 transition-[transform,box-shadow,filter] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_-2px_rgba(168,85,247,0.55),0_0_52px_-8px_rgba(45,212,191,0.35)] group-hover:[filter:drop-shadow(0_0_14px_rgba(168,85,247,0.45))]">
                <div className="flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 ring-1 ring-white/15">
                  <span className="text-white">{feature.icon}</span>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-50">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Features = memo(FeaturesComponent);
