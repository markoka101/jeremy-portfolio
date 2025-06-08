/** @type {import('tailwindcss').Config} */
import inter from 'tailwindcss-font-inter';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [inter],
	important: true
};
