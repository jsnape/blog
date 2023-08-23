import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    render: ['@astrojs/markdown-remark', {
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'nord',
        langs: ['js', 'html', 'css', 'astro', "csharp"],
        wrap: false
      }
    }]
  },
  site: 'https://proud-river-03ddfce03.3.azurestaticapps.net',
  integrations: [svelte(), sitemap()]
});