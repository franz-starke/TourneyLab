import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.svg',
				'robots.txt',
				'apple-touch-icon.png',
				'icons/pwa-192x192.png',
				'icons/pwa-512x512.png'
			],
			manifest: {
				name: 'TourneyLab',
				short_name: 'TourneyLab',
				description: 'An app for organizing all kinds of tournaments - primarily for volleyball, but easily adaptable for many other sports.',
				start_url: '.',
				display: 'standalone',
				background_color: '#020618',
				theme_color: '#020618',
				icons: [
					{
						src: 'icons/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'icons/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'icons/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			}
		})
	],
	server: {
		host: '0.0.0.0',
		port: 5173
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})
