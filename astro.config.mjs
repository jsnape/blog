import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
      render: [
        '@astrojs/markdown-remark',
        {
          syntaxHighlight: 'shiki',
          shikiConfig: {
            theme: 'nord',
            langs: ['js', 'html', 'css', 'astro', "csharp"],
            wrap: false,
          },
        },
      ],
    },
  });
  
