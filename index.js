const pkg = require("./package.json");

module.exports = function(eleventyConfig, options = {}) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch (error) {
    console.log(`WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${error.message}`);
  }

  eleventyConfig.setLiquidOptions(
    Object.assign({
      dateFormat: "%Y-%m-%dT%H:%M:%S.%L%:z",
      jsTruthy: true,
      orderedFilterParameters: true,
      timezoneOffset: 0,
    }, options),
  );
};
