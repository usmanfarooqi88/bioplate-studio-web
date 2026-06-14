import { memo } from 'react';

/**
 * Site footer with improved design and layout.
 */
function FooterComponent() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Download', href: '#download' },
      { label: 'GitHub', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web', external: true },
      { label: 'Releases', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/releases', external: true },
    ],
    Resources: [
      { label: 'Documentation', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/wiki', external: true },
      { label: 'Issues & Feedback', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/issues', external: true },
      { label: 'License', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/blob/main/LICENSE', external: true },
      { label: 'Changelog', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/releases', external: true },
    ],
    Connect: [
      { label: 'Email', href: 'mailto:contact@bioplatestudio.com', external: true },
      { label: 'GitHub', href: 'https://github.com/usmanfarooqi88', external: true },
      { label: 'Twitter', href: 'https://twitter.com/bioplatestudio', external: true },
      { label: 'Discussions', href: 'https://github.com/usmanfarooqi88/bioplate-studio-web/discussions', external: true },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute -bottom-1/2 -right-1/2 h-96 w-96 rounded-full bg-purple-600 blur-3xl opacity-10" />
        <div className="absolute -bottom-1/2 -left-1/4 h-80 w-80 rounded-full bg-teal-600 blur-3xl opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-16 md:py-20">
          {/* Top section - Brand & Description */}
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BioPlate Studio
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional desktop application for creating publication-ready morphology plates. Designed for mycologists and biological researchers.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/usmanfarooqi88/bioplate-studio-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/bioplatestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="mailto:contact@bioplatestudio.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-8 sm:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider opacity-90">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-sm text-gray-400 transition-all duration-200 hover:text-white hover:translate-x-0.5 inline-block"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left text-sm text-gray-500">
              <p>
                © {currentYear} BioPlate Studio. Made by{' '}
                <a
                  href="https://github.com/usmanfarooqi88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Usman Farooqi
                </a>
                {' '}• Licensed under{' '}
                <a
                  href="https://github.com/usmanfarooqi88/bioplate-studio-web/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  MIT
                </a>
              </p>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a
                href="https://github.com/usmanfarooqi88/bioplate-studio-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Status
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://github.com/usmanfarooqi88/bioplate-studio-web/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Report Issue
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://github.com/usmanfarooqi88/bioplate-studio-web/security/advisories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
