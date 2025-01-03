import pkg from "./package.json" with { type: "json" };

export const defaultLiquidOptions = {
  dateFormat: "%Y-%m-%dT%H:%M:%S.%L%:z",
  jsTruthy: true,
  orderedFilterParameters: true,
  timezoneOffset: 0,
};

export default function eleventyPluginLiquid(eleventyConfig, options = {}) {
  eleventyConfig.versionCheck(pkg["11ty"].compatibility);

  eleventyConfig.setLiquidOptions(Object.assign(defaultLiquidOptions, options));
}
