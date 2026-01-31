const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const animatePlugin = require("../src/index.js");

async function generateCSS(content, config = {}) {
  const result = await postcss(
    tailwindcss({
      content: [{ raw: content }],
      corePlugins: { preflight: false },
      plugins: [animatePlugin],
      ...config,
    }),
  ).process("@tailwind utilities", { from: undefined });

  return result.css;
}

describe("Tailwind Animate Plugin", () => {
  describe("Basic Animations", () => {
    test("generates fade-in animation", async () => {
      const css = await generateCSS('<div class="animate-fade-in"></div>');
      expect(css).toContain(".animate-fade-in");
      expect(css).toContain("animation");
    });

    test("generates bounce animation", async () => {
      const css = await generateCSS('<div class="animate-bounce"></div>');
      expect(css).toContain(".animate-bounce");
      expect(css).toContain("animation");
    });

    test("generates spin animation", async () => {
      const css = await generateCSS('<div class="animate-spin"></div>');
      expect(css).toContain(".animate-spin");
      expect(css).toContain("animation");
    });
  });

  describe("New Animations (v2.0)", () => {
    test("generates blurred-fade-in animation", async () => {
      const css = await generateCSS(
        '<div class="animate-blurred-fade-in"></div>',
      );
      expect(css).toContain(".animate-blurred-fade-in");
      expect(css).toContain("animation");
    });

    test("generates rotate-360 animation", async () => {
      const css = await generateCSS('<div class="animate-rotate-360"></div>');
      expect(css).toContain(".animate-rotate-360");
      expect(css).toContain("animation");
    });

    test("generates expand-horizontally animation", async () => {
      const css = await generateCSS(
        '<div class="animate-expand-horizontally"></div>',
      );
      expect(css).toContain(".animate-expand-horizontally");
      expect(css).toContain("transform-origin");
    });
  });

  describe("Scroll Animations", () => {
    test("generates view timeline utilities", async () => {
      const css = await generateCSS('<div class="timeline-view"></div>');
      expect(css).toContain(".timeline-view");
      expect(css).toContain("animation-timeline");
    });

    test("generates scroll timeline utilities", async () => {
      const css = await generateCSS('<div class="timeline-scroll"></div>');
      expect(css).toContain(".timeline-scroll");
      expect(css).toContain("animation-timeline");
    });

    test("generates animation range utilities", async () => {
      const css = await generateCSS('<div class="animate-range-entry"></div>');
      expect(css).toContain(".animate-range-entry");
      expect(css).toContain("animation-range");
    });

    test("generates preset animation ranges", async () => {
      const css = await generateCSS(
        '<div class="animate-range-gradual"></div>',
      );
      expect(css).toContain(".animate-range-gradual");
      expect(css).toContain("10% 90%");
    });
  });

  describe("Control Utilities", () => {
    test("generates duration utilities", async () => {
      const css = await generateCSS(
        '<div class="animate-duration-none"></div>',
      );
      expect(css).toContain(".animate-duration-none");
      expect(css).toContain("animation-duration");
    });

    test("generates delay utilities", async () => {
      const css = await generateCSS('<div class="animate-delay-none"></div>');
      expect(css).toContain(".animate-delay-none");
      expect(css).toContain("animation-delay");
    });

    test("generates direction utilities", async () => {
      const css = await generateCSS('<div class="animate-reverse"></div>');
      expect(css).toContain(".animate-reverse");
      expect(css).toContain("animation-direction");
    });

    test("generates fill mode utilities", async () => {
      const css = await generateCSS('<div class="animate-fill-both"></div>');
      expect(css).toContain(".animate-fill-both");
      expect(css).toContain("animation-fill-mode");
    });

    test("generates iteration count utilities", async () => {
      const css = await generateCSS('<div class="animate-infinite"></div>');
      expect(css).toContain(".animate-infinite");
      expect(css).toContain("animation-iteration-count");
    });

    test("generates timing function utilities", async () => {
      const css = await generateCSS('<div class="animate-ease-in-out"></div>');
      expect(css).toContain(".animate-ease-in-out");
      expect(css).toContain("animation-timing-function");
    });

    test("generates play state utilities", async () => {
      const css = await generateCSS('<div class="animate-pause"></div>');
      expect(css).toContain(".animate-pause");
      expect(css).toContain("animation-play-state");
    });
  });

  describe("Arbitrary Values", () => {
    test("supports arbitrary duration values", async () => {
      const css = await generateCSS(
        '<div class="animate-duration-[2s]"></div>',
      );
      expect(css).toContain("animation-duration: 2s");
    });

    test("supports arbitrary delay values", async () => {
      const css = await generateCSS('<div class="animate-delay-500"></div>', {
        theme: {
          extend: {
            animationDelay: { 500: "500ms" },
          },
        },
      });
      expect(css).toContain("animation-delay: 500ms");
    });

    test("supports arbitrary timeline values", async () => {
      const css = await generateCSS('<div class="timeline-view-block"></div>');
      expect(css).toContain("animation-timeline: view(block)");
    });

    test("supports arbitrary animation range values", async () => {
      const css = await generateCSS(
        '<div class="animate-range-[entry_10%_cover_50%]"></div>',
      );
      expect(css).toContain("animation-range: entry 10% cover 50%");
    });
  });

  describe("Combined Usage", () => {
    test("generates multiple animation utilities", async () => {
      const css = await generateCSS(
        '<div class="animate-fade-in animate-duration-[2s] animate-delay-[1s] animate-infinite"></div>',
      );
      expect(css).toContain(".animate-fade-in");
      expect(css).toContain("animation-duration: 2s");
      expect(css).toContain("animation-delay: 1s");
      expect(css).toContain(".animate-infinite");
    });

    test("generates scroll animation with controls", async () => {
      const css = await generateCSS(
        '<div class="timeline-view animate-zoom-in animate-range-cover animate-duration-[1.5s]"></div>',
      );
      expect(css).toContain(".timeline-view");
      expect(css).toContain(".animate-zoom-in");
      expect(css).toContain(".animate-range-cover");
      expect(css).toContain("animation-duration: 1.5s");
    });
  });
});
