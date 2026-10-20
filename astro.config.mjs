// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// For GitHub Pages: set `site` to https://<user>.github.io and `base` to '/<repo-name>'
// (or leave base as '/' if the repo is named <user>.github.io).
export default defineConfig({
  site: 'https://felipecabrera1804.github.io',
  base: '/',
  integrations: [mdx()],
});
