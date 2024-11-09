import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				galada: ['Galada', 'sans-serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				pixelify: ['Pixelify Sans', 'sans-serif']
			}
		}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: ['light', 'dark']
	}
} satisfies Config;
