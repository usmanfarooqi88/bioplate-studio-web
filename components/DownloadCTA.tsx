export function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black px-6"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500 blur-3xl" />
        <div className="animation-delay-1000 absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-teal-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
          Ready to Create Beautiful Plates?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
          Download BioPlate Studio for free and start creating professional
          morphology plates in minutes
        </p>

        <div className="mb-16 flex flex-col justify-center gap-6 sm:flex-row">
          <a
            href="https://github.com/usmanfarooqi88/bioplate-studio-web/releases/download/v1.0.0/BioPlate.Studio_1.0.0_x64.dmg"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transform rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-10 py-6 text-lg font-semibold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:from-purple-500 hover:to-purple-700"
          >
            <div className="flex items-center gap-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-80">Download for</div>
                <div className="text-xl font-bold">macOS</div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/usmanfarooqi88/bioplate-studio-web/releases/download/v1.0.0/BioPlate.Studio_1.0.0_x64-setup.exe"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transform rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 px-10 py-6 text-lg font-semibold text-white shadow-2xl shadow-teal-500/50 transition-all hover:scale-105 hover:from-teal-500 hover:to-teal-700"
          >
            <div className="flex items-center gap-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-80">Download for</div>
                <div className="text-xl font-bold">Windows</div>
              </div>
            </div>
          </a>
        </div>

        <div className="space-y-2 text-sm text-gray-400">
          <p className="font-semibold text-gray-300">
            Version 1.0.0 • Free • Open Source
          </p>
          <p>
            macOS 10.15+ (Intel & Apple Silicon) • Windows 10/11 • 8 GB RAM
            recommended
          </p>
        </div>
      </div>
    </section>
  );
}
