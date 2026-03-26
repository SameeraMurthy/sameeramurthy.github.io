import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	ssr: {
		noExternal: [
			"tsparticles",
			"@tsparticles/engine",
			"@tsparticles/slim",
			"@tsparticles/svelte"
		]
	},
	server: {
		allowedHosts: true
	}
});
