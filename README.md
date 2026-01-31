# tw-animations

[![NPM version](https://img.shields.io/npm/v/tw-animations?color=32A9C3&labelColor=1B3C4A&label=npm%20v4)](https://www.npmjs.com/package/tw-animations)
[![NPM version](https://img.shields.io/npm/v/tw-animations-plugin?color=32A9C3&labelColor=1B3C4A&label=npm%20v3)](https://www.npmjs.com/package/tw-animations-plugin)
[![NPM downloads](https://img.shields.io/npm/dm/tw-animations?color=32A9C3&labelColor=1B3C4A&label=downloads)](https://www.npmjs.com/package/tw-animations)
[![License](https://img.shields.io/npm/l/tw-animations?color=32A9C3&labelColor=1B3C4A&label=license)](https://www.npmjs.com/package/tw-animations)

Extended animation utilities for **Tailwind CSS v4 and v3**. 85+ animations, scroll timelines, and view animations with zero configuration.

[**Website**](https://tailwindcss-animate.vercel.app) • [**Configurator**](https://tailwindcss-animate.vercel.app/configurator) • [**GitHub**](https://github.com/iscodex/tailwindcss-animate)

![Tailwind CSS Animate](https://github.com/user-attachments/assets/7f06d2ff-0167-4261-a1fd-6c10913b8dcd)

## ✨ Features

- **85+ Animations** - Attention seekers, fades, slides, zooms, rotations, and more
- **Scroll Animations** - View timelines and animation ranges based on scroll position (NEW in v2.0)
- **Zero Configuration** - Just import and start animating
- **Dual Support** - Works with both Tailwind CSS v4 and v3
- **Fully Customizable** - Control duration, delay, timing, direction, and more
- **CSS Custom Properties** - Easy theming and dynamic control
- **Arbitrary Values** - Use any value with bracket notation
- **Modern & Lightweight** - Built with CSS custom properties and @utility syntax

## 📦 Packages

This monorepo contains two packages:

| Package                                                         | Version                                                   | Description                        |
| --------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------- |
| [`tw-animations`](./packages/tailwindcss-animate)               | ![npm](https://img.shields.io/npm/v/tw-animations)        | For **Tailwind CSS v4** (CSS-only) |
| [`tw-animations-plugin`](./packages/tailwindcss-animate-plugin) | ![npm](https://img.shields.io/npm/v/tw-animations-plugin) | For **Tailwind CSS v3** (Plugin)   |

## 🚀 Installation

### For Tailwind CSS v4

```bash
npm install tw-animations
```

Add the import to your CSS file:

```css
@import "tailwindcss";
@import "tw-animations";
```

### For Tailwind CSS v3

```bash
npm install tw-animations-plugin
```

Add the plugin to your Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [require("tw-animations-plugin")],
};
```

## 🎯 Quick Start

### Basic Animation

```html
<div class="animate-fade-in">Hello World!</div>
```

### With Controls

```html
<button class="animate-bounce animate-infinite animate-duration-[2s]">
  Click me
</button>
```

### Scroll Animation (NEW in v2.0)

```html
<div class="timeline-view animate-fade-in-up animate-range-entry">
  Appears when entering viewport
</div>
```

## 🎨 Available Animations

### Attention Seekers (16)

`animate-flash` • `animate-head-shake` • `animate-heart-beat` • `animate-jelly` • `animate-rubber-band` • `animate-shake-x` • `animate-shake-y` • `animate-swing` • `animate-tada` • `animate-wiggle` • `animate-wobble` • `animate-float` • `animate-spin` • `animate-ping` • `animate-pulse` • `animate-bounce`

### New Animations (v2.0)

`animate-blurred-fade-in` • `animate-blink` • `animate-dancing` • `animate-jiggle` • `animate-pop` • `animate-rotate-360` • `animate-rotate-180` • `animate-rotate-90` • `animate-expand-horizontally` • `animate-expand-vertically` • `animate-bounce-fade-in` • `animate-pulse-fade-in`

### Fading Entrances (5)

`animate-fade-in` • `animate-fade-in-down` • `animate-fade-in-start` • `animate-fade-in-end` • `animate-fade-in-up`

### Fading Exits (5)

`animate-fade-out` • `animate-fade-out-down` • `animate-fade-out-start` • `animate-fade-out-end` • `animate-fade-out-up`

### Sliding Entrances/Exits (8)

`animate-slide-in-down` • `animate-slide-in-start` • `animate-slide-in-end` • `animate-slide-in-up` • `animate-slide-out-down` • `animate-slide-out-start` • `animate-slide-out-end` • `animate-slide-out-up`

### Zooming Entrances/Exits (10)

`animate-zoom-in` • `animate-zoom-in-down` • `animate-zoom-in-start` • `animate-zoom-in-end` • `animate-zoom-in-up` • `animate-zoom-out` • `animate-zoom-out-down` • `animate-zoom-out-start` • `animate-zoom-out-end` • `animate-zoom-out-up`

### Bouncing Entrances/Exits (10)

`animate-bounce-in` • `animate-bounce-in-down` • `animate-bounce-in-start` • `animate-bounce-in-end` • `animate-bounce-in-up` • `animate-bounce-out` • `animate-bounce-out-down` • `animate-bounce-out-start` • `animate-bounce-out-end` • `animate-bounce-out-up`

### Rotating Entrances/Exits (10)

`animate-rotate-in` • `animate-rotate-in-down-start` • `animate-rotate-in-down-end` • `animate-rotate-in-up-start` • `animate-rotate-in-up-end` • `animate-rotate-out` • `animate-rotate-out-down-start` • `animate-rotate-out-down-end` • `animate-rotate-out-up-start` • `animate-rotate-out-up-end`

### Back Entrances/Exits (8)

`animate-back-in-down` • `animate-back-in-start` • `animate-back-in-end` • `animate-back-in-up` • `animate-back-out-down` • `animate-back-out-start` • `animate-back-out-end` • `animate-back-out-up`

### Flippers (5)

`animate-flip` • `animate-flip-in-x` • `animate-flip-in-y` • `animate-flip-out-x` • `animate-flip-out-y`

### Specials (6)

`animate-hinge` • `animate-jack-in` • `animate-jack-out` • `animate-roll-in` • `animate-roll-out` • `animate-particle`

### Dashing (4)

`animate-dash-in-start` • `animate-dash-in-end` • `animate-dash-out-start` • `animate-dash-out-end`

## 📜 Scroll Animations (NEW in v2.0)

Animate elements based on their scroll position in the viewport.

### View Timelines

```html
<!-- Animate when element enters viewport -->
<div class="timeline-view animate-fade-in">...</div>

<!-- Animate on horizontal scroll -->
<div class="timeline-view-x animate-slide-in-start">...</div>

<!-- Animate on vertical scroll -->
<div class="timeline-view-y animate-fade-in-up">...</div>
```

### Animation Ranges

Control when animations play during scroll:

```html
<!-- Play when entering viewport -->
<div class="timeline-view animate-zoom-in animate-range-entry">...</div>

<!-- Play when leaving viewport -->
<div class="timeline-view animate-fade-out animate-range-exit">...</div>

<!-- Play while in viewport -->
<div class="timeline-view animate-rotate-360 animate-range-cover">...</div>

<!-- Preset ranges -->
<div class="timeline-view animate-fade-in animate-range-gradual">...</div>
<!-- gradual (10%-90%) | moderate (20%-80%) | brisk (30%-70%) | rapid (40%-60%) -->
```

### Arbitrary Range Values

```html
<div class="timeline-view animate-fade-in animate-range-[entry_10%_cover_50%]">
  Custom range
</div>
```

### Browser Support for Scroll Animations

Scroll animations require:

- **Chrome/Edge**: 115+
- **Safari**: 17.4+
- **Firefox**: Coming soon (currently in development)

## 🎛️ Control Utilities

### Duration

```html
<div class="animate-fade-in animate-duration-[500ms]">Fast fade</div>
<div class="animate-bounce animate-duration-[2s]">Slow bounce</div>
```

### Delay

```html
<div class="animate-fade-in animate-delay-[1s]">Delayed entrance</div>
```

### Iteration Count

```html
<div class="animate-pulse animate-infinite">Never stops</div>
<div class="animate-bounce animate-twice">Bounce twice</div>
<div class="animate-shake-x animate-iteration-[5]">Shake 5 times</div>
```

### Direction

```html
<div class="animate-spin animate-reverse">Reverse spin</div>
<div class="animate-wiggle animate-alternate animate-infinite">
  Back and forth
</div>
```

### Fill Mode

```html
<div class="animate-fade-in animate-fill-both">Maintains final state</div>
```

### Timing Functions

```html
<div class="animate-bounce animate-ease-in-out">Smooth bounce</div>
<div class="animate-fade-in animate-ease-linear">Linear fade</div>
```

### Play State

```html
<div class="animate-spin animate-pause hover:animate-play">Spin on hover</div>
```

## 🎨 CSS Custom Properties

Customize animations globally:

```css
:root {
  --default-animation-duration: 0.5s;
  --default-animation-delay: 0s;
  --default-animation-timing-function: ease-in-out;
}

/* Theme-specific customization */
.dark {
  --default-animation-duration: 0.8s;
}
```

## 💡 Advanced Usage

### Hover Animations

```html
<button class="hover:animate-wiggle hover:animate-infinite">
  Hover to wiggle
</button>
```

### Responsive Animations

```html
<div class="animate-bounce md:animate-fade-in lg:animate-none">
  Responsive animation
</div>
```

### Combining Utilities

```html
<div
  class="animate-fade-in animate-duration-[2s] animate-delay-[500ms] animate-ease-in-out"
>
  Smooth, delayed fade in
</div>
```

## 📚 Documentation

- [Website & Interactive Demos](https://tailwindcss-animate.vercel.app)
- [Animation Configurator](https://tailwindcss-animate.vercel.app/configurator)
- [GitHub Repository](https://github.com/iscodex/tailwindcss-animate)
- [npm Package (v4)](https://www.npmjs.com/package/tw-animations)
- [npm Package (v3)](https://www.npmjs.com/package/tw-animations-plugin)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE.md) file for details.

## 🙏 Credits

Created with ❤️ by [alckordev](https://github.com/alckordev)

Inspired by [Animate.css](https://animate.style/) and [tailwind-animations](https://github.com/midudev/tailwind-animations)

## 📝 Changelog

See [CHANGELOG](CHANGELOG.md) for version history and changes.

---

**⭐ If you find this useful, please consider giving it a star on GitHub!**
