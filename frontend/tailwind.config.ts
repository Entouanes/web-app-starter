import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Add your custom font here
				serif: ['Merriweather', 'serif'],
				mono: ['Fira Code', 'monospace'],
			},
		},
	},

	plugins: [typography, forms, containerQueries, aspectRatio, daisyui],

	daisyui: {
		themes: ["light", "dark", "cupcake"],
	}
} satisfies Config;
