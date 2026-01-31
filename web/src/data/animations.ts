export interface Animation {
  name: string;
  class: string;
  category: string;
  description?: string;
  supportsScrollTimeline?: boolean;
}

export const animations: Animation[] = [
  // Attention Seekers
  {
    name: "flash",
    class: "animate-flash",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "head-shake",
    class: "animate-head-shake",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "heart-beat",
    class: "animate-heart-beat",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "jelly",
    class: "animate-jelly",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "rubber-band",
    class: "animate-rubber-band",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "shake-x",
    class: "animate-shake-x",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "shake-y",
    class: "animate-shake-y",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "swing",
    class: "animate-swing",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "tada",
    class: "animate-tada",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "wiggle",
    class: "animate-wiggle",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "wobble",
    class: "animate-wobble",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "float",
    class: "animate-float",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "spin",
    class: "animate-spin",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "ping",
    class: "animate-ping",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "pulse",
    class: "animate-pulse",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },
  {
    name: "bounce",
    class: "animate-bounce",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
  },

  // New in v2.0
  {
    name: "blurred-fade-in",
    class: "animate-blurred-fade-in",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "blink",
    class: "animate-blink",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "dancing",
    class: "animate-dancing",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "jiggle",
    class: "animate-jiggle",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "pop",
    class: "animate-pop",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "rotate-360",
    class: "animate-rotate-360",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "rotate-180",
    class: "animate-rotate-180",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "rotate-90",
    class: "animate-rotate-90",
    category: "Attention Seekers",
    supportsScrollTimeline: true,
    description: "NEW",
  },

  // Fading Entrances
  {
    name: "fade-in",
    class: "animate-fade-in",
    category: "Fading Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-in-down",
    class: "animate-fade-in-down",
    category: "Fading Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-in-start",
    class: "animate-fade-in-start",
    category: "Fading Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-in-end",
    class: "animate-fade-in-end",
    category: "Fading Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-in-up",
    class: "animate-fade-in-up",
    category: "Fading Entrances",
    supportsScrollTimeline: true,
  },

  // Fading Exits
  {
    name: "fade-out",
    class: "animate-fade-out",
    category: "Fading Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-out-down",
    class: "animate-fade-out-down",
    category: "Fading Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-out-start",
    class: "animate-fade-out-start",
    category: "Fading Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-out-end",
    class: "animate-fade-out-end",
    category: "Fading Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "fade-out-up",
    class: "animate-fade-out-up",
    category: "Fading Exits",
    supportsScrollTimeline: true,
  },

  // Sliding Entrances
  {
    name: "slide-in-down",
    class: "animate-slide-in-down",
    category: "Sliding Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-in-start",
    class: "animate-slide-in-start",
    category: "Sliding Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-in-end",
    class: "animate-slide-in-end",
    category: "Sliding Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-in-up",
    class: "animate-slide-in-up",
    category: "Sliding Entrances",
    supportsScrollTimeline: true,
  },

  // Sliding Exits
  {
    name: "slide-out-down",
    class: "animate-slide-out-down",
    category: "Sliding Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-out-start",
    class: "animate-slide-out-start",
    category: "Sliding Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-out-end",
    class: "animate-slide-out-end",
    category: "Sliding Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "slide-out-up",
    class: "animate-slide-out-up",
    category: "Sliding Exits",
    supportsScrollTimeline: true,
  },

  // Zooming Entrances
  {
    name: "zoom-in",
    class: "animate-zoom-in",
    category: "Zooming Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-in-down",
    class: "animate-zoom-in-down",
    category: "Zooming Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-in-start",
    class: "animate-zoom-in-start",
    category: "Zooming Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-in-end",
    class: "animate-zoom-in-end",
    category: "Zooming Entrances",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-in-up",
    class: "animate-zoom-in-up",
    category: "Zooming Entrances",
    supportsScrollTimeline: true,
  },

  // Zooming Exits
  {
    name: "zoom-out",
    class: "animate-zoom-out",
    category: "Zooming Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-out-down",
    class: "animate-zoom-out-down",
    category: "Zooming Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-out-start",
    class: "animate-zoom-out-start",
    category: "Zooming Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-out-end",
    class: "animate-zoom-out-end",
    category: "Zooming Exits",
    supportsScrollTimeline: true,
  },
  {
    name: "zoom-out-up",
    class: "animate-zoom-out-up",
    category: "Zooming Exits",
    supportsScrollTimeline: true,
  },

  // Expanding (NEW in v2.0)
  {
    name: "expand-horizontally",
    class: "animate-expand-horizontally",
    category: "Expanding",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "expand-vertically",
    class: "animate-expand-vertically",
    category: "Expanding",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "bounce-fade-in",
    class: "animate-bounce-fade-in",
    category: "Expanding",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "pulse-fade-in",
    class: "animate-pulse-fade-in",
    category: "Expanding",
    supportsScrollTimeline: true,
    description: "NEW",
  },
  {
    name: "slide-up-fade",
    class: "animate-slide-up-fade",
    category: "Expanding",
    supportsScrollTimeline: true,
    description: "NEW",
  },
];

export const categories = Array.from(
  new Set(animations.map((a) => a.category)),
);
