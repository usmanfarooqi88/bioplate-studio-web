import { memo } from 'react';

/**
 * Site footer with quick links, contact channels, and legal info.
 */
function FooterComponent() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-white">BioPlate Studio</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional desktop application for creating publication-ready
              morphology plates for mycology and biological research.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/usmanfarooqi88/bioplate-studio-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/usmanfarooqi88/bioplate-studio-web/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@bioplatestudio.com"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@bioplatestudio.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/bioplatestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/usmanfarooqi88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{' '}
            BioPlate Studio. Open Source • by{' '}
            <a
              href="https://github.com/usmanfarooqi88"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-400"
            >
              Usman Farooqi
            </a>{' '}
            •{' '}
            <a
              href="https://github.com/usmanfarooqi88/bioplate-studio-web/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-400"
            >
              MIT License
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-400 transition-colors hover:text-purple-400"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-400 transition-colors hover:text-purple-400"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
