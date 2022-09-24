import plFlag from '../../public/flags/pl.png';
import usFlag from '../../public/flags/us.png';

export const pl = {
	title: 'Witaj w Next.js!',
	menu: {
		home: 'Strona główna',
		projects: 'Projekty',
		contact: 'Kontakt',
	},
	themes: {
		light: 'Jasny',
		dark: 'Ciemny',
	},
};

export const en = {
	title: 'Welcome to Next.js!',
	menu: {
		home: 'Home',
		projects: 'Projects',
		contact: 'Contact',
	},
	themes: {
		light: 'Light',
		dark: 'Dark',
	},
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
