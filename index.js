const package_ = require("./package.json");

module.exports = function(eleventyConfig, options = {}) {
  try {
    eleventyConfig.versionCheck(package_["11ty"].compatibility);
  } catch (error) {
    console.log(`WARN: Eleventy Plugin (${package_.name}) Compatibility: ${error.message}`);
  }
}
