# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-01-30

### 🎉 Major Release - Dual Support for Tailwind v3 and v4

This is a major release with significant new features and improvements, including scroll animations and a new plugin for Tailwind CSS v3.

### Added

#### New Package Structure

- **Monorepo architecture** with pnpm workspaces
- **@iscodex/tailwindcss-animate** - For Tailwind CSS v4 (CSS-only)
- **@iscodex/tailwindcss-animate-plugin** - NEW package for Tailwind CSS v3 (JavaScript plugin)

#### Scroll Animations (NEW)

- **View Timelines** - Animate elements based on viewport position
  - `timeline-view`, `timeline-view-x`, `timeline-view-y`
  - `timeline-view-block`, `timeline-view-inline`
  - Arbitrary values support: `timeline-[view(block)]`
- **Scroll Timelines** - Animate based on scroll container
  - `timeline-scroll`, `timeline-scroll-x`, `timeline-scroll-y`
  - `timeline-scroll-block`, `timeline-scroll-inline`
  - Arbitrary values support: `timeline-[scroll(inline)]`
- **Animation Ranges** - Control when animations play during scroll
  - Keywords: `animate-range-cover`, `animate-range-contain`, `animate-range-entry`, `animate-range-exit`
  - Presets: `animate-range-gradual`, `animate-range-moderate`, `animate-range-brisk`, `animate-range-rapid`
  - Separate controls: `animate-range-start-*`, `animate-range-end-*`
  - Arbitrary values: `animate-range-[entry_10%_cover_50%]`

#### New Animations (12)

- `animate-blurred-fade-in` - Fade in with blur effect
- `animate-blink` - Blinking effect
- `animate-dancing` - Dancing movement
- `animate-impulse-rotation-left/right` - Impulse rotations
- `animate-jiggle` - Gentle jiggle
- `animate-pop` - Pop-in effect
- `animate-rotate-360` - Full rotation
- `animate-rotate-180` - Half rotation
- `animate-rotate-90` - Quarter rotation
- `animate-expand-horizontally` - Horizontal expansion
- `animate-expand-vertically` - Vertical expansion
- `animate-contract-horizontally` - Horizontal contraction
- `animate-contract-vertically` - Vertical contraction
- `animate-bounce-fade-in` - Bounce with fade
- `animate-pulse-fade-in` - Pulse with fade
- `animate-slide-up-fade` - Slide up with fade

#### Website & Documentation

- **New Astro-based website** with modern UI
- **Interactive configurator** with React components
- **Scroll animation demos** with live examples
- **Comprehensive documentation** with all features
- **LLM.txt** for AI assistant context

### Changed

- **Project structure** - Now a monorepo with separate packages for v3 and v4
- **Package naming** - Maintained `@iscodex/tailwindcss-animate` for v4, new `@iscodex/tailwindcss-animate-plugin` for v3
- **Website technology** - Migrated from React Router to Astro for better performance
- **Documentation** - Updated with scroll animations and new features

### Breaking Changes

⚠️ **For Tailwind CSS v3 users:**

- Must now use `@iscodex/tailwindcss-animate-plugin` instead of the main package
- Plugin registration required in `tailwind.config.js`

⚠️ **For Tailwind CSS v4 users:**

- No breaking changes - same usage as v1.0.0
- Import path remains `@iscodex/tailwindcss-animate`

### Browser Support

**Basic Animations:** All modern browsers
**Scroll Animations:** Chrome 115+, Edge 115+, Safari 17.4+ (Firefox in development)

### Migration Guide

#### From v1.0.0 to v2.0.0 (Tailwind v4)

No changes required. Scroll animations are additive features.

#### From v1.0.0 to v2.0.0 (Tailwind v3)

```bash
# Uninstall old package
npm uninstall @iscodex/tailwindcss-animate

# Install new plugin
npm install @iscodex/tailwindcss-animate-plugin
```

Update your config:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [require("@iscodex/tailwindcss-animate-plugin")],
};
```

## [1.0.0] - 2025-09-02

### Added

- Initial release of @iscodex/tailwindcss-animate
- Support for Tailwind CSS v4 with @utility and @theme syntax
- 85+ animation utilities across 11 categories:
  - Attention Seekers (16 animations)
  - Back Entrances/Exits (8 animations)
  - Bouncing Entrances/Exits (10 animations)
  - Dashing (4 animations)
  - Fading Entrances/Exits (10 animations)
  - Flippers (5 animations)
  - Rotating Entrances/Exits (10 animations)
  - Sliding Entrances/Exits (8 animations)
  - Specials (6 animations)
  - Zooming Entrances/Exits (10 animations)
- Animation control utilities:
  - Duration control with arbitrary values
  - Delay control with arbitrary values
  - Direction control (normal, reverse, alternate)
  - Fill mode control (none, forwards, backwards, both)
  - Iteration count control (finite and infinite)
  - Play state control (running, paused)
  - Timing function control (ease, linear, cubic-bezier)
  - Animation composition control (replace, add, accumulate)
- CSS custom properties for global animation theming
- Modular architecture with organized animation categories

[2.0.0]: https://github.com/iscodex/tailwindcss-animate/releases/tag/v2.0.0
[1.0.0]: https://github.com/iscodex/tailwindcss-animate/releases/tag/v1.0.0
