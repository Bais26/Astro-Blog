import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	load: {
		// Tambahkan konfigurasi untuk Font Awesome
		externals: ['@fortawesome/fontawesome-free'],
		polyfills: ['IntersectionObserver'],
	  },
});
