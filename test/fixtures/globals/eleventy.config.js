module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require("../../../"), {
    globals: {
      dates: {
        display_with_weekday: "%A, %B %e<sup>%q</sup>, %Y",
        year: "%Y",
      },
    },
  });
};
