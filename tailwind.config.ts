import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				galada: ['Galada', 'sans-serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				pixelify: ['Pixelify Sans', 'sans-serif'],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				oxanium: ["Oxanium", "sans-serif"],
			}
		}
	},


	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				custom: {
					"primary": "#cebda0",
							
					"primary-content": "#0f0d09",
							
					"secondary": "#775e35",
							
					"secondary-content": "#e3ddd4",
							
					"accent": "#c39f61",
							
					"accent-content": "#0e0903",
							
					"neutral": "#000901",
							
					"neutral-content": "#c2c7c3",
							
					"base-100": "#18140e",
							
					"base-200": "#13100b",
							
					"base-300": "#0f0c07",
							
					"base-content": "#eeebe6",
							
					"info": "#00dbff",
							
					"info-content": "#001116",
							
					"success": "#49ab00",
							
					"success-content": "#020b00",
							
					"warning": "#f3c200",
							
					"warning-content": "#140e00",
							
					"error": "#dd0052",
							
					"error-content": "#ffd7da",
				},
			},
		],
	}
} satisfies Config;
