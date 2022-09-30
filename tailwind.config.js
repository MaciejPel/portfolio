/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				alabaster: '#ede9e0',
				linen: '#ece4db',
			},
			keyframes: {
				slideInTop: {
					'0%': { transform: 'translateY(-80px);' },
					'100%': { transform: 'translateY(0);' },
				},
				fadeIn: {
					'0%, 50%': { opacity: '0;' },
					'100%': { opacity: '1;' },
				},
				spinSlow: {
					'0%': { transform: 'rotate(0);' },
					'100%': { transform: 'rotate(360deg);' },
				},
			},
			animation: {
				slideInTop: 'slideInTop 500ms ease-in-out',
				fadeIn: 'fadeIn 1500ms ease-in-out',
				spinSlow: 'spinSlow 8s linear infinite',
			},
		},
	},
	plugins: [],
};

