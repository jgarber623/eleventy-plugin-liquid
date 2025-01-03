import assert from "node:assert";
import test from "node:test";

import Eleventy from "@11ty/eleventy";

test("default plugin configuration", async () => {
  const eleventy = new Eleventy("test/fixtures/default", null, { configPath: "index.js" });
  const results = await eleventy.toJSON();

  assert.strictEqual(results[0].content, "2024-02-25T23:15:00.000+00:00\n18:15:00\n");
});

test("globals option", async () => {
  const eleventy = new Eleventy("test/fixtures/globals", null, {
    configPath: "test/fixtures/globals/eleventy.config.js",
  });

  const results = await eleventy.toJSON();

  assert.strictEqual(results[0].content, "Sunday, February 25<sup>th</sup>, 2024\n2024\n");
});
