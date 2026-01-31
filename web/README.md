# tw-animations – Website

Documentation and configurator site for **tw-animations**, built with Astro.

## Tech stack

- **Astro 5** – Static site generator
- **Tailwind CSS v4** – Styling (with tw-animations)
- **TypeScript** – Type safety
- **tw-animations** – Animation library (workspace dependency)
- **Shiki** – Syntax highlighting (via Astro Code)

No React; all UI is Astro components with minimal client-side scripts where needed.

## Development

From the monorepo root:

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

From the `web` folder:

```bash
pnpm install   # from root first, or pnpm install in web after root install
pnpm dev
```

## Build

From the root:

```bash
pnpm build
```

Or in `web`:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project structure

```
web/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home (animations, scroll demos, install)
│   │   └── configurator.astro    # Interactive configurator
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   ├── Configurator.astro    # Configurator widget
│   │   ├── AnimationGrid.astro   # Animation grid on home
│   │   ├── InstallTabs.astro     # Install instructions
│   │   ├── BackgroundPattern.astro
│   │   └── FeatureCard.astro
│   ├── data/
│   │   └── animations.ts         # Animation definitions
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── cn.ts
│       └── index.ts
├── public/
│   ├── favicon.svg
│   └── og.png
├── astro.config.mjs
└── package.json
```

## Features

- **Home**: Animation collection, scroll & view timeline demos, install steps
- **Configurator**: Pick animation, duration, delay, scroll timeline; live preview and copy class output
- **Responsive**: Navbar with mobile menu, card layout for all screen sizes
- **Dark theme**: Single dark theme (no toggle)
- **Code blocks**: Styled with Shiki (github-dark)

## Deployment

Static output; deploy to any host (Vercel, Netlify, Cloudflare Pages, etc.).

From root:

```bash
pnpm build
```

Output is in `web/dist`. Connect the repo to Vercel (or similar) and set the build command to `pnpm build` and the output directory to `web/dist` (or run from `web` and use `dist`).

## Environment

No environment variables required for normal use.

## License

MIT
