import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import EventSource from 'eventsource';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		global: {
			EventSource: EventSource,
		}
	}
});
