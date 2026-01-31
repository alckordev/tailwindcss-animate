const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addUtilities, matchUtilities, theme }) {
    // Animation keyframes
    const animations = {
      // Attention Seekers
      ".animate-flash": { animation: "flash 1s ease 0s both" },
      ".animate-head-shake": { animation: "head-shake 1s ease-in-out 0s both" },
      ".animate-heartbeat": {
        animation: "heartbeat 0.6s ease-out 0s both",
      },
      ".animate-jelly": {
        animation: "jelly 1s ease 0s both",
        transformOrigin: "center",
      },
      ".animate-rubber-band": { animation: "rubber-band 1s ease 0s both" },
      ".animate-shake-x": { animation: "shake-x 1s ease 0s both" },
      ".animate-shake-y": { animation: "shake-y 1s ease 0s both" },
      ".animate-swing": {
        animation: "swing 1s ease 0s both",
        transformOrigin: "top center",
      },
      ".animate-tada": { animation: "tada 1s ease 0s both" },
      ".animate-wiggle": { animation: "wiggle 1s ease 0s both" },
      ".animate-wobble": { animation: "wobble 1s ease 0s both" },
      ".animate-float": { animation: "float 3s ease-in-out 0s infinite" },

      // New in v2.0
      ".animate-blurred-fade-in": {
        animation: "blurred-fade-in 0.9s ease-in-out 0s both",
      },
      ".animate-blink": { animation: "blink 1s step-end 0s both" },
      ".animate-dancing": { animation: "dancing 1s ease-in-out 0s both" },
      ".animate-impulse-rotation-left": {
        animation: "impulse-rotation-left 1s ease-in-out 0s both",
      },
      ".animate-impulse-rotation-right": {
        animation: "impulse-rotation-right 1s ease-in-out 0s both",
      },
      ".animate-jiggle": { animation: "jiggle 0.6s ease 0s both" },
      ".animate-pop": {
        animation: "pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s both",
      },
      ".animate-rotate-360": { animation: "rotate-360 1s ease 0s both" },
      ".animate-rotate-180": { animation: "rotate-180 0.5s ease 0s both" },
      ".animate-rotate-90": { animation: "rotate-90 0.3s ease 0s both" },

      // Default Tailwind animations
      ".animate-spin": { animation: "spin 1s linear infinite" },
      ".animate-ping": {
        animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      ".animate-pulse": {
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      ".animate-bounce": { animation: "bounce 1s ease infinite" },

      // Back Entrances
      ".animate-back-in-down": { animation: "back-in-down 1s ease 0s both" },
      ".animate-back-in-start": { animation: "back-in-start 1s ease 0s both" },
      ".animate-back-in-end": { animation: "back-in-end 1s ease 0s both" },
      ".animate-back-in-up": { animation: "back-in-up 1s ease 0s both" },

      // Back Exits
      ".animate-back-out-down": { animation: "back-out-down 1s ease 0s both" },
      ".animate-back-out-start": {
        animation: "back-out-start 1s ease 0s both",
      },
      ".animate-back-out-end": { animation: "back-out-end 1s ease 0s both" },
      ".animate-back-out-up": { animation: "back-out-up 1s ease 0s both" },

      // Bouncing Entrances
      ".animate-bounce-in": { animation: "bounce-in 0.75s ease 0s both" },
      ".animate-bounce-in-down": {
        animation: "bounce-in-down 1s ease 0s both",
      },
      ".animate-bounce-in-start": {
        animation: "bounce-in-start 1s ease 0s both",
      },
      ".animate-bounce-in-end": { animation: "bounce-in-end 1s ease 0s both" },
      ".animate-bounce-in-up": { animation: "bounce-in-up 1s ease 0s both" },

      // Bouncing Exits
      ".animate-bounce-out": { animation: "bounce-out 0.75s ease 0s both" },
      ".animate-bounce-out-down": {
        animation: "bounce-out-down 1s ease 0s both",
      },
      ".animate-bounce-out-start": {
        animation: "bounce-out-start 1s ease 0s both",
      },
      ".animate-bounce-out-end": {
        animation: "bounce-out-end 1s ease 0s both",
      },
      ".animate-bounce-out-up": { animation: "bounce-out-up 1s ease 0s both" },

      // Dashing
      ".animate-dash-in-start": {
        animation: "dash-in-start 0.5s ease 0s both",
      },
      ".animate-dash-in-end": { animation: "dash-in-end 0.5s ease 0s both" },
      ".animate-dash-out-start": {
        animation: "dash-out-start 0.5s ease 0s both",
      },
      ".animate-dash-out-end": { animation: "dash-out-end 0.5s ease 0s both" },

      // Expanding
      ".animate-expand-horizontally": {
        animation: "expand-horizontally 1s ease 0s both",
        transformOrigin: "left",
      },
      ".animate-expand-vertically": {
        animation: "expand-vertically 1s ease 0s both",
        transformOrigin: "top",
      },
      ".animate-contract-horizontally": {
        animation: "contract-horizontally 1s ease 0s both",
        transformOrigin: "left",
      },
      ".animate-contract-vertically": {
        animation: "contract-vertically 1s ease 0s both",
        transformOrigin: "top",
      },
      ".animate-bounce-fade-in": {
        animation: "bounce-fade-in 1s ease 0s both",
      },
      ".animate-pulse-fade-in": { animation: "pulse-fade-in 1s ease 0s both" },
      ".animate-slide-up-fade": {
        animation: "slide-up-fade 0.6s ease 0s both",
      },

      // Fading Entrances
      ".animate-fade-in": { animation: "fade-in 1s ease 0s both" },
      ".animate-fade-in-down": {
        animation: "fade-in-down 0.6s ease-in-out 0s both",
      },
      ".animate-fade-in-start": {
        animation: "fade-in-start 0.6s ease-in-out 0s both",
      },
      ".animate-fade-in-end": {
        animation: "fade-in-end 0.6s ease-in-out 0s both",
      },
      ".animate-fade-in-up": {
        animation: "fade-in-up 0.6s ease-in-out 0s both",
      },

      // Fading Exits
      ".animate-fade-out": { animation: "fade-out 1s ease 0s both" },
      ".animate-fade-out-down": {
        animation: "fade-out-down 0.6s ease-out 0s both",
      },
      ".animate-fade-out-start": {
        animation: "fade-out-start 0.6s ease-out 0s both",
      },
      ".animate-fade-out-end": {
        animation: "fade-out-end 0.6s ease-out 0s both",
      },
      ".animate-fade-out-up": {
        animation: "fade-out-up 0.6s ease-out 0s both",
      },

      // Flippers
      ".animate-flip": {
        animation: "flip 1s ease 0s both",
        backfaceVisibility: "visible",
      },
      ".animate-flip-in-x": {
        animation: "flip-in-x 0.75s ease 0s both",
        backfaceVisibility: "visible",
      },
      ".animate-flip-in-y": {
        animation: "flip-in-y 0.75s ease 0s both",
        backfaceVisibility: "visible",
      },
      ".animate-flip-out-x": {
        animation: "flip-out-x 0.75s ease 0s both",
        backfaceVisibility: "visible",
      },
      ".animate-flip-out-y": {
        animation: "flip-out-y 0.75s ease 0s both",
        backfaceVisibility: "visible",
      },

      // Rotating Entrances
      ".animate-rotate-in": {
        animation: "rotate-in 1s ease 0s both",
        transformOrigin: "center",
      },
      ".animate-rotate-in-down-start": {
        animation: "rotate-in-down-start 1s ease 0s both",
        transformOrigin: "left bottom",
      },
      ".animate-rotate-in-down-end": {
        animation: "rotate-in-down-end 1s ease 0s both",
        transformOrigin: "right bottom",
      },
      ".animate-rotate-in-up-start": {
        animation: "rotate-in-up-start 1s ease 0s both",
        transformOrigin: "left bottom",
      },
      ".animate-rotate-in-up-end": {
        animation: "rotate-in-up-end 1s ease 0s both",
        transformOrigin: "right bottom",
      },

      // Rotating Exits
      ".animate-rotate-out": {
        animation: "rotate-out 1s ease 0s both",
        transformOrigin: "center",
      },
      ".animate-rotate-out-down-start": {
        animation: "rotate-out-down-start 1s ease 0s both",
        transformOrigin: "left bottom",
      },
      ".animate-rotate-out-down-end": {
        animation: "rotate-out-down-end 1s ease 0s both",
        transformOrigin: "right bottom",
      },
      ".animate-rotate-out-up-start": {
        animation: "rotate-out-up-start 1s ease 0s both",
        transformOrigin: "left bottom",
      },
      ".animate-rotate-out-up-end": {
        animation: "rotate-out-up-end 1s ease 0s both",
        transformOrigin: "right bottom",
      },

      // Sliding Entrances
      ".animate-slide-in-down": { animation: "slide-in-down 1s ease 0s both" },
      ".animate-slide-in-start": {
        animation: "slide-in-start 1s ease 0s both",
      },
      ".animate-slide-in-end": { animation: "slide-in-end 1s ease 0s both" },
      ".animate-slide-in-up": { animation: "slide-in-up 1s ease 0s both" },

      // Sliding Exits
      ".animate-slide-out-down": {
        animation: "slide-out-down 1s ease 0s both",
      },
      ".animate-slide-out-start": {
        animation: "slide-out-start 1s ease 0s both",
      },
      ".animate-slide-out-end": { animation: "slide-out-end 1s ease 0s both" },
      ".animate-slide-out-up": { animation: "slide-out-up 1s ease 0s both" },

      // Specials
      ".animate-hinge": {
        animation: "hinge 2s ease 0s both",
        transformOrigin: "top left",
      },
      ".animate-jack-in": { animation: "jack-in 1s ease 0s both" },
      ".animate-jack-out": { animation: "jack-out 1s ease 0s both" },
      ".animate-roll-in": { animation: "roll-in 1s ease 0s both" },
      ".animate-roll-out": { animation: "roll-out 1s ease 0s both" },
      ".animate-particle": { animation: "particle 1s ease 0s both" },

      // Zooming Entrances
      ".animate-zoom-in": { animation: "zoom-in 1s ease 0s both" },
      ".animate-zoom-in-down": { animation: "zoom-in-down 1s ease 0s both" },
      ".animate-zoom-in-start": { animation: "zoom-in-start 1s ease 0s both" },
      ".animate-zoom-in-end": { animation: "zoom-in-end 1s ease 0s both" },
      ".animate-zoom-in-up": { animation: "zoom-in-up 1s ease 0s both" },

      // Zooming Exits
      ".animate-zoom-out": { animation: "zoom-out 1s ease 0s both" },
      ".animate-zoom-out-down": { animation: "zoom-out-down 1s ease 0s both" },
      ".animate-zoom-out-start": {
        animation: "zoom-out-start 1s ease 0s both",
      },
      ".animate-zoom-out-end": { animation: "zoom-out-end 1s ease 0s both" },
      ".animate-zoom-out-up": { animation: "zoom-out-up 1s ease 0s both" },
    };

    addUtilities(animations);

    // Scroll Animations - View Timelines (v2.0)
    addUtilities({
      ".timeline-view": { animationTimeline: "view()" },
      ".timeline-view-x": { animationTimeline: "view(x)" },
      ".timeline-view-y": { animationTimeline: "view(y)" },
      ".timeline-view-block": { animationTimeline: "view(block)" },
      ".timeline-view-inline": { animationTimeline: "view(inline)" },
      ".timeline-scroll": { animationTimeline: "scroll()" },
      ".timeline-scroll-x": { animationTimeline: "scroll(x)" },
      ".timeline-scroll-y": { animationTimeline: "scroll(y)" },
      ".timeline-scroll-block": { animationTimeline: "scroll(block)" },
      ".timeline-scroll-inline": { animationTimeline: "scroll(inline)" },
    });

    // Animation Ranges (v2.0)
    addUtilities({
      ".animate-range-normal": { animationRange: "normal" },
      ".animate-range-cover": { animationRange: "cover" },
      ".animate-range-contain": { animationRange: "contain" },
      ".animate-range-entry": { animationRange: "entry" },
      ".animate-range-exit": { animationRange: "exit" },
      ".animate-range-entry-crossing": { animationRange: "entry-crossing" },
      ".animate-range-exit-crossing": { animationRange: "exit-crossing" },
      ".animate-range-gradual": { animationRange: "entry 10% entry 90%" },
      ".animate-range-moderate": { animationRange: "entry 20% entry 80%" },
      ".animate-range-brisk": { animationRange: "entry 30% entry 70%" },
      ".animate-range-rapid": { animationRange: "entry 40% entry 60%" },
    });

    // Animation Control Utilities
    addUtilities({
      ".animate-normal": { animationDirection: "normal" },
      ".animate-reverse": { animationDirection: "reverse" },
      ".animate-alternate": { animationDirection: "alternate" },
      ".animate-alternate-reverse": { animationDirection: "alternate-reverse" },
      ".animate-fill-none": { animationFillMode: "normal" },
      ".animate-fill-forwards": { animationFillMode: "forwards" },
      ".animate-fill-backwards": { animationFillMode: "backwards" },
      ".animate-fill-both": { animationFillMode: "both" },
      ".animate-infinite": { animationIterationCount: "infinite" },
      ".animate-once": { animationIterationCount: "1" },
      ".animate-twice": { animationIterationCount: "2" },
      ".animate-thrice": { animationIterationCount: "3" },
      ".animate-run": { animationPlayState: "running" },
      ".animate-play": { animationPlayState: "running" },
      ".animate-stop": { animationPlayState: "paused" },
      ".animate-pause": { animationPlayState: "paused" },
      ".animate-ease": { animationTimingFunction: "ease" },
      ".animate-ease-linear": { animationTimingFunction: "linear" },
      ".animate-ease-in": {
        animationTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
      },
      ".animate-ease-out": {
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      },
      ".animate-ease-in-out": {
        animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      ".animate-replace": { animationComposition: "replace" },
      ".animate-add": { animationComposition: "add" },
      ".animate-accumulate": { animationComposition: "accumulate" },
      ".animate-duration-none": { animationDuration: "0s" },
      ".animate-delay-none": { animationDelay: "0s" },
    });

    // Arbitrary values utilities
    matchUtilities(
      {
        "animate-duration": (value) => ({
          animationDuration: value,
        }),
      },
      { values: theme("animationDuration") },
    );

    matchUtilities(
      {
        "animate-delay": (value) => ({
          animationDelay: value,
        }),
      },
      { values: theme("animationDelay") },
    );

    matchUtilities(
      {
        "animate-iteration": (value) => ({
          animationIterationCount: value,
        }),
      },
      { values: theme("animationIterationCount") },
    );

    matchUtilities(
      {
        "animate-ease": (value) => ({
          animationTimingFunction: value,
        }),
      },
      { values: theme("animationTimingFunction") },
    );

    matchUtilities({
      timeline: (value) => ({
        animationTimeline: value,
      }),
    });

    matchUtilities({
      "animate-range": (value) => ({
        animationRange: value,
      }),
    });

    matchUtilities({
      "animate-range-start": (value) => ({
        animationRangeStart: value,
      }),
    });

    matchUtilities({
      "animate-range-end": (value) => ({
        animationRangeEnd: value,
      }),
    });
  },
  {
    theme: {
      extend: {
        animationDuration: {},
        animationDelay: {},
        animationIterationCount: {},
        animationTimingFunction: {},
      },
    },
  },
);
