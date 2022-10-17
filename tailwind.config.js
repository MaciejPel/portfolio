/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				mobileHover: { raw: '(hover: hover)' },
			},
			gridTemplateColumns: {
				layout: 'repeat(auto-fill, minmax(160px, 1fr));',
			},
			gridTemplateRows: {
				layout: 'repeat(auto-fill, minmax(230px, 1fr))',
				stepsLayout: '1fr auto 1fr auto 1fr auto 1fr',
			},
			keyframes: {
				slideInTop: {
					'0%': { transform: 'translateY(-80px);', opacity: '0;' },
					'50%': { opacity: '0;' },
					'100%': { transform: 'translateY(0);', opacity: '1;' },
				},
				fadeIn: {
					'0%, 50%': { opacity: '0;' },
					'100%': { opacity: '1;' },
				},
				fadeInRight: {
					'0%': { opacity: '0;', transform: 'translateX(20%)' },
					'100%': { opacity: '1;', transform: 'translateX(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: '0;', transform: 'translateX(-20%)' },
					'100%': { opacity: '1;', transform: 'translateX(0)' },
				},
				spinSlow: {
					'0%': { transform: 'rotate(0);' },
					'100%': { transform: 'rotate(360deg);' },
				},
				spinSlowInfinite: {
					'0%': { transform: 'rotate(0);' },
					'100%': { transform: 'rotate(-360deg);' },
				},
				scale: {
					'0%': { transform: 'scale(0.5);' },
					'50%': { transform: 'scale(1.5);' },
					'100%': { transform: 'scale(0.5);' },
				},
				gradient: {
					'0%': { 'background-position': '0% 10%;' },
					'50%': { 'background-position': '50% 50%;' },
					'100%': { 'background-position': '0% 10%;' },
				},
			},
			animation: {
				slideInTop: 'slideInTop .5s ease-in-out',
				fadeIn: 'fadeIn 1.5s ease-in-out',
				fadeInFast: 'fadeIn .5s ease',
				fadeInRight: 'fadeInRight .8s ease',
				fadeInLeft: 'fadeInLeft .8s ease',
				spinSlow: 'spinSlow 20s linear infinite',
				spinSlowInfinite: 'spinSlowInfinite 20s ease infinite',
				spinSlowInfiniteReverse: 'spinSlow 8s ease infinite',
				scale: 'scale 10s ease infinite',
				gradient: 'gradient 5s ease infinite',
			},
		},
	},
	plugins: [],
};
