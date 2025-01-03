# eleventy-plugin-liquid

**An [Eleventy](https://www.11ty.dev) plugin for configuring the [LiquidJS](https://liquidjs.com) template language.**

[![npm](https://img.shields.io/npm/v/@jgarber/eleventy-plugin-liquid.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eleventy-plugin-liquid)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/eleventy-plugin-liquid.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eleventy-plugin-liquid)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/eleventy-plugin-liquid/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/eleventy-plugin-liquid/actions/workflows/ci.yml)

## Usage

First, add the plugin as [a development dependency](https://docs.npmjs.com/cli/configuring-npm/package-json#devdependencies) to your project's `package.json` file:

```sh
npm install --save-dev @jgarber/eleventy-plugin-liquid
```

Next, add the plugin to your project's [Eleventy configuration file](https://www.11ty.dev/docs/config#default-filenames) (e.g. `eleventy.config.js`):

```js
import liquidPlugin from "@jgarber/eleventy-plugin-liquid";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(liquidPlugin);
}
```

With no additional configuration, eleventy-plugin-liquid will configure the LiquidJS template language using the options listed below.

## Options

eleventy-plugin-liquid sets the following configuration options:

| Name                      | Default                     |
|:--------------------------|:----------------------------|
| `dateFormat`              | `"%Y-%m-%dT%H:%M:%S.%L%:z"` |
| `jsTruthy`                | `true`                      |
| `orderedFilterParameters` | `true`                      |
| `timezoneOffset`          | `0`                         |

From v2.0.0, this package exports these options as `defaultLiquidOptions`.

See [LiquidJS' Options documentation](https://liquidjs.com/tutorials/options.html) for a full, up-to-date list of configuration options. [Eleventy's LiquidJS template language documentation](https://www.11ty.dev/docs/languages/liquid/) also has several important notes regarding Eleventy's default configuration.

```js
export default function(eleventyConfig) {
  eleventyConfig.addPlugin(require("@jgarber/eleventy-plugin-liquid"), {
    globals: {
      dates: {
        display: "%A, %B %e<sup>%q</sup>, %Y",
        time: "%l:%M %p",
      },
    },
    jsTruthy: false
  });
};
```

> [!TIP]
> As shown above, a common configuration option you may want to set is arbitrary data (like `dates`) in [the `globals` object](https://liquidjs.com/tutorials/options.html#globals). The keys in the `dates` object may be used to format dates and times in Liquid templates. For example, `{{ page.date | date: dates.time }}`. See [the LiquidJS `date` filter documentation](https://liquidjs.com/filters/date.html) for more.

## Acknowledgments

First and foremost, eleventy-plugin-liquid wouldn't be possible without [Zach Leatherman](https://www.zachleat.com)'s incredible work creating Eleventy and his stewardship of its community.

eleventy-plugin-liquid is written and maintained by [Jason Garber](https://sixtwothree.org).
