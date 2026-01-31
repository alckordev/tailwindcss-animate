# Contributing to Tailwind CSS Animate

Thank you for considering contributing to Tailwind CSS Animate! We welcome contributions from the community.

## Development Setup

This project uses pnpm workspaces. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

Clone the repository and install dependencies:

```bash
git clone https://github.com/iscodex/tailwindcss-animate.git
cd tailwindcss-animate
pnpm install
```

## Project Structure

```
tailwindcss-animate/
├── packages/
│   ├── tailwindcss-animate/          # Tailwind CSS v4 package
│   └── tailwindcss-animate-plugin/   # Tailwind CSS v3 plugin
├── web/                               # Astro website
├── pnpm-workspace.yaml
└── package.json
```

## Development Workflow

### Working on the CSS Package (v4)

1. Make changes in `packages/tailwindcss-animate/src/`
2. Test your changes locally
3. Run tests: `pnpm --filter @iscodex/tailwindcss-animate test`

### Working on the Plugin (v3)

1. Make changes in `packages/tailwindcss-animate-plugin/src/`
2. Run tests: `pnpm --filter @iscodex/tailwindcss-animate-plugin test`
3. Add tests for new features

### Working on the Website

1. Navigate to `web/` directory
2. Run dev server: `pnpm dev`
3. Make your changes
4. Build to verify: `pnpm build:web`

## Adding New Animations

1. Add the CSS keyframes and utilities in `packages/tailwindcss-animate/src/animations/`
2. Add the same animation to the v3 plugin in `packages/tailwindcss-animate-plugin/src/index.js`
3. Add the animation to `web/src/data/animations.ts`
4. Update documentation

## Testing

Run all tests:

```bash
pnpm test
```

Run specific package tests:

```bash
pnpm --filter @iscodex/tailwindcss-animate-plugin test
```

## Commit Guidelines

We follow Conventional Commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:

```
feat: add blurred-fade-in animation
fix: correct zoom-in transform origin
docs: update README with scroll animations
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Add tests if applicable
5. Commit using conventional commits
6. Push to your fork
7. Open a Pull Request

## Code Style

- Use 2 spaces for indentation
- Follow existing code style
- Add comments for complex logic
- Use meaningful variable names

## Questions?

Feel free to open an issue for any questions or concerns.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
