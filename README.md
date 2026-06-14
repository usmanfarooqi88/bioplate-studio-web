# BioPlate Studio

Marketing site for **BioPlate Studio** — a desktop app for creating publication-ready morphology plates for mycology and biological research.

Live: [bioplatestudio.com](https://www.bioplatestudio.com)

## Features

- Hero section with boomerang canvas video and GSAP mouse parallax
- Minimal loading screen with progress animation
- Sticky-scroll features showcase with app screenshots
- Download CTA for macOS and Windows installers
- Responsive layout with glass-morphism UI (purple / teal / pink palette)

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — parallax animations
- [lucide-react](https://lucide.dev/) — icons

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project structure

```
app/                  Next.js App Router (layout, page, globals.css)
components/           React components (HeroSection, Screenshots, etc.)
lib/                  Shared utilities (video source, boomerang hook)
public/               Static assets (logos, screenshots, videos)
```

## Deployment

The site is configured for [Vercel](https://vercel.com/). Push to `main` to trigger a deploy.

Video assets are cached via headers in `next.config.ts`.

## License

MIT — see [LICENSE](LICENSE).

## Author

[Usman Farooqi](https://github.com/usmanfarooqi88)
