import { memo } from 'react';

/**
 * Download call-to-action section with enhanced design.
 */
function DownloadCTAComponent() {
  return (
    <section
      id="download"
      className="relative min-h-screen scroll-mt-6 overflow-hidden bg-black py-20 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient backgrounds */}
        <div className="absolute -left-1/2 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-600 to-transparent opacity-20 blur-3xl" />
        <div className="absolute -right-1/2 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-teal-600 to-transparent opacity-20 blur-3xl" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header section */}
        <div className="mb-16 md:mb-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Create Beautiful Plates?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Download BioPlate Studio and start creating publication-ready morphology plates in minutes. Free and open source.
          </p>
        </div>

        {/* Download buttons */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16 md:mb-20">
          {/* macOS Button */}
          <a
            href="https://github.com/usmanfarooqi88/bioplate-studio-web/releases/download/v1.0.2/BioPlate.Studio_1.0.2_x64.dmg"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-300 -z-10" />

            {/* Button */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  {/* Apple icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-400">Download for</div>
                    <div className="text-2xl font-bold text-white">macOS</div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  macOS 10.15+ (Intel & Apple Silicon)
                </p>
              </div>
            </div>
          </a>

          {/* Windows Button */}
          <a
            href="https://github.com/usmanfarooqi88/bioplate-studio-web/releases/download/v1.0.2/BioPlate.Studio_1.0.2_x64-setup.exe"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-300 -z-10" />

            {/* Button */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 transition-all duration-300 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  {/* Windows icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 group-hover:bg-teal-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-400">Download for</div>
                    <div className="text-2xl font-bold text-white">Windows</div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Windows 10/11 (64-bit)
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* System requirements and info */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">System Requirements</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  8 GB RAM recommended • 500 MB disk space
                </p>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">✓</span>
                  <span>Free & Open Source</span>
                </div>
                <span className="hidden sm:block text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">✓</span>
                  <span>MIT Licensed</span>
                </div>
                <span className="hidden sm:block text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">✓</span>
                  <span>Active Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version info */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-gray-500 font-mono">
            Version 1.0.2 • Latest stable release
          </p>
        </div>
      </div>
    </section>
  );
}

export const DownloadCTA = memo(DownloadCTAComponent);
