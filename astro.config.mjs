import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

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
  integrations: [svelte()]
});