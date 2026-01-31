# Tailwind CSS Animate - Website

This is the documentation website for Tailwind CSS Animate, built with Astro.

## Tech Stack

- **Astro** - Static Site Generator
- **React** - For interactive components
- **Tailwind CSS v4** - Styling
- **TypeScript** - Type safety
- **tw-animations** - The library itself

## Development

Install dependencies from the root:

```bash
cd ..
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

## Build

Build the website for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
web/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   └── configurator.astro    # Interactive configurator
│   ├── layouts/
│   │   └── Layout.astro          # Base layout
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── AnimationCard.astro
│   │   └── Configurator.tsx      # React component
│   ├── data/
│   │   └── animations.ts         # Animation data
│   └── styles/
│       └── global.css            # Global styles
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og.jpg
├── astro.config.mjs
└── package.json
```

## Features

- **Interactive Configurator**: Test animations with different settings
- **Live Previews**: See animations in action
- **Code Generation**: Copy ready-to-use code
- **Scroll Demos**: Interactive scroll animation examples
- **Responsive Design**: Works on all devices
- **Dark Mode**: Automatic theme switching
- **Syntax Highlighting**: Using Astro's Code component

## Deployment

The site can be deployed to:

- **Vercel** (recommended)
- Netlify
- Cloudflare Pages
- Any static hosting

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment

No environment variables needed for basic functionality.

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) in the root directory.

## License

MIT
