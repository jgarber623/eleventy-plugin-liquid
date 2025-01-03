import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginLiquid, {
    globals: {
      dates: {
        display_with_weekday: "%A, %B %e<sup>%q</sup>, %Y",
        year: "%Y",
      },
    },
  });
}
