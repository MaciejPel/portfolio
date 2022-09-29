import plFlag from '../../public/flags/pl.svg';
import usFlag from '../../public/flags/us.svg';

export const pl = {
	title: 'Witaj w Next.js!',
	menu: {
		home: 'Start',
		about: 'O mnie',
		technologies: 'Technologie',
		projects: 'Projekty',
		'mile-steps': 'Moja droga',
	},
	themes: {
		light: 'Jasny',
		dark: 'Ciemny',
	},
	sections: {
		technologies: {
			description: 'Technologie, z kórych korzystam na co dzień',
		},
	},
	copyright: 'Wszystkie prawa zastrzeżone.',
};

export const en = {
	title: 'Welcome to Next.js!',
	menu: {
		home: 'Home',
		about: 'About',
		technologies: 'Technologies',
		projects: 'Projects',
		'mile-steps': 'Mile steps',
	},
	themes: {
		light: 'Light',
		dark: 'Dark',
	},
	sections: {
		technologies: {
			description: "Technologies I'm comfortable to work with",
		},
	},
	copyright: 'All rights reserved.',
};

export const languageOptions = {
	pl: 'pl',
	en: 'us',
	flags: { pl: plFlag, en: usFlag },
	abbreviations: {
		en: 'English',
		pl: 'Polski',
	},
};
