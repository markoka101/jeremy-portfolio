import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		sitemapPlugin({
			hostname: 'https://jeremy-photography-portfolio.netlify.app/',
			dynamicRoutes: ['/', '/about-jeremy', '/portfolio', '/book-photo-session', '/session-pricing']
		})
	]
});
