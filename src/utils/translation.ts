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
		contact: 'Dzięki za przewinięcie!',
	},
	themes: {
		light: 'Jasny',
		dark: 'Ciemny',
	},
	sections: {
		home: {
			welcome: 'Cześć, jestem',
			developer: 'Frontend Developer',
			enthusiast: 'Entuzjasta Internetu',
			enjoyer: 'Miłośnik technologii',
		},
		about: {
			title: 'O mnie',
			description:
				'Cześć, nazywam się Maciej Pełczyński. Mam 22 lata i zajmuję się programowaniem stron- preferuję Frontend, choć w moich projektach niejednokrotnie musiałem zadbać o bezpieczeństwo użytkownika i intergralność danych, dlatego czasami wskakuję też na Backend. Jestem absolwentem technikum informatycznego, a aktualnie studiuję informatykę na Politechnice Poznańskiej. W wolnym czasie poznaję nowe technologie i amatorsko zajmuję się obróbką zdjęć i filmów. Więcej o używanych technologiach oraz doświadczeniu możesz dowiedzieć się poniżej.',
		},
		technologies: {
			description: 'Technologie, z kórych korzystam na co dzień',
			'programming languages': 'języki programowania',
			styling: 'style',
			databases: 'bazy danych',
			frontend: 'frontend',
			backend: 'backend',
			other: 'inne',
		},
		projects: {
			description: 'Kilka projektów, które zrealizowałem',
			spotterDescription:
				'Aplikacja do wizualizacji spersonalizowanych danych Spotify. Zobacz swoje najlepsze utwory, artystów i gatunki w różnych przedziałach czasowych. Kolory tła zmieniają się w zależności od aktualnie odtwarzanej okładki albumu.',
			storageBoxDescription:
				"Aplikacja przypominająca media społecznościowe, służąca do przesyłania, kompresji, grupowania i tagowania mediów. Użytkownik może przeglądać obiekty, media, tagi i innych użytkowników oraz like'ować media. Do magazynowania użyłem BunnyCDN.",
		},
		'mile-steps': {},
		contact: {
			title: 'Kontakt',
			name: 'Imię',
			email: 'Adres email',
			message: 'Wiadomość',
			submit: 'Wyślij',
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
		contact: 'Thanks for scrolling!',
	},
	themes: {
		light: 'Light',
		dark: 'Dark',
	},
	sections: {
		home: {
			welcome: 'Hi, my name is',
			developer: 'Frontend Developer',
			enthusiast: 'Web Enthusiast',
			enjoyer: 'Technology Enjoyer',
		},
		about: {
			title: 'About me',
			description:
				"Hi, my name is Maciej Pełczyński. I am 22 years old, and I am dealing with programming pages- I prefer Frontend, however in my projects I've had to take care of user security and data integrality on multiple occasions, so I jump on the Backend from time to time. I am a graduate of an IT technical school, and I am currently studying computer science at the Poznan University of Technology. In my spare time, I learn about new technologies and do amateur photo and video processing. More about the technologies used and experience you can find out below.",
		},
		technologies: {
			description: "Technologies I'm comfortable to work with",
			'programming languages': 'programming languages',
			styling: 'styling',
			databases: 'databases',
			frontend: 'frontend',
			backend: 'backend',
			other: 'other',
		},
		projects: {
			description: 'Some of my projects',
			spotterDescription:
				'A web app for visualizing personalized Spotify data. View your top tracks, artists and genres in different time spans. Background colors change depending on currently played album cover.',
			storageBoxDescription:
				"A social media like app for uploading, compressing, grouping and tagging media . User can browse through objects, single media, tags, other users, and like media as well. I've used BunnyCDN for media storage.",
		},
		'mile-steps': {},
		contact: {
			title: 'Contact',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			submit: 'Submit',
			contact: 'Thanks for scrolling!',
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
