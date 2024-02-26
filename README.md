# eleventy-plugin-template

> [!NOTE]
> **Thanks for using this template!** You'll first want to find-and-replace instances of `eleventy-plugin-template`, `templatePlugin`, and `An Eleventy plugin for…`. If you're not me, you'll also want to update author information in `package.json` and `LICENSE`, replace instances of `jgarber` and `jgarber623`, and update a bunch of URLs.
>
> Once you've done all that, you can remove this note and starting building your Web Component.

**An [Eleventy](https://www.11ty.dev) plugin for…**

[![npm](https://img.shields.io/npm/v/@jgarber/eleventy-plugin-template.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eleventy-plugin-template)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/eleventy-plugin-template.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eleventy-plugin-template)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/eleventy-plugin-template/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/eleventy-plugin-template/actions/workflows/ci.yml)

## Usage

First, add the plugin as [a development dependency](https://docs.npmjs.com/cli/configuring-npm/package-json#devdependencies) to your project's `package.json` file:

```sh
npm install --save-dev @jgarber/eleventy-plugin-template
```

Next, add the plugin to your project's [Eleventy configuration file](https://www.11ty.dev/docs/config#default-filenames) (e.g. `eleventy.config.js`):

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-template'));
};
```

## Options

## ESM Support

Eleventy v3.0.0 [added bundler-free ESM support](https://www.11ty.dev/blog/canary-eleventy-v3). This plugin works with either ESM or CommonJS projects!

```js
import templatePlugin from '@jgarber/eleventy-plugin-template';

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(templatePlugin);
}
```

## Acknowledgments

First and foremost, eleventy-plugin-template wouldn't be possible without [Zach Leatherman](https://www.zachleat.com)'s incredible work creating Eleventy and his stewardship of its community.

eleventy-plugin-template is written and maintained by [Jason Garber](https://sixtwothree.org).
