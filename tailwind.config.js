/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},
		keyframes: {
			slideInTop: {
				'0%': { transform: 'translateY(-80px);' },
				'100%': { transform: 'translateY(0);' },
			},
			fadeIn: {
				'0%, 50%': { opacity: '0;' },
				'100%': { opacity: '1;' },
			},
		},
		animation: {
			slideInTop: 'slideInTop 500ms ease-in-out',
			fadeIn: 'fadeIn 500ms ease-in-out',
		},
	},
	plugins: [],
};

