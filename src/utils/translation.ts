import plFlag from "../../public/flags/pl.svg";
import usFlag from "../../public/flags/us.svg";

const age = new Date().getFullYear() - 2000;

export const pl = {
	menu: {
		home: "Start",
		about: "O mnie",
		technologies: "Technologie",
		projects: "Projekty",
		"mile-steps": "Moja droga",
		contact: "Dzięki za przewinięcie!",
	},
	themes: {
		system: "System",
		light: "Jasny",
		dark: "Ciemny",
	},
	sections: {
		home: {
			welcome: "Cześć, jestem",
			developer: "Frontend Developer",
			enthusiast: "Entuzjasta Internetu",
			enjoyer: "Miłośnik technologii",
			github: "Mój GitHub",
		},
		about: {
			title: "O mnie",
			description: `Cześć, nazywam się Maciej Pełczyński. Mam ${age} lat i specjalizuję się w programowaniu stron internetowych, preferując Frontend. Jednak w swoich projektach często zajmowałem się bezpieczeństwem użytkowników i integralnością danych, co skłoniło mnie do pracy również nad Backendem. W grudniu 2024 roku ukończyłem studia informatyczne na Politechnice Poznańskiej. W wolnym czasie poznaję nowe technologie oraz amatorsko zajmuję się obróbką zdjęć i filmów. Obecnie szczególnie interesuję się językami Go i Zig. Poniżej więcej szczegółów na temat używanych przeze mnie technologii i mojego doświadczenia.`,
		},
		technologies: {
			description: "Technologie, z kórych korzystam na co dzień",
			"programming languages": "języki programowania",
			styling: "style",
			"js ecosystem": "ekosystem js",
			databases: "bazy danych",
			other: "inne",
		},
		projects: {
			description: "Kilka projektów, które zrealizowałem",
			spotterDescription:
				"Aplikacja do wizualizacji spersonalizowanych danych Spotify. Zobacz swoje najlepsze utwory, artystów i gatunki w różnych przedziałach czasowych. Kolory tła zmieniają się w zależności od aktualnie odtwarzanej okładki albumu.",
			storageBoxDescription:
				"Aplikacja przypominająca media społecznościowe, służąca do przesyłania, kompresji, grupowania i tagowania mediów. Użytkownik może przeglądać obiekty, media, tagi i innych użytkowników oraz like'ować media. Do magazynowania użyłem BunnyCDN.",
			caseValueDescription:
				"An app designed to track the value of Counter-Strike cases, with manual price and currency updates every 2 hours. It provides approximate values and allows users to refresh their inventory and profile information for the latest insights.",
			expensestrackerDescription:
				"A simple app for tracking expenses. Records and categorises expenses to help you manage your budget.",
		},
		"mile-steps": {
			beginning: {
				year: "2018",
				title: "Od czegoś trzeba zacząć",
				description:
					"Mój pierwszy samodzielnie napisany plik HTML! Niedługo potem uczyłem się także CSS, vanilla JS i PHP.",
			},
			birrt: {
				year: "2020/2021",
				title: "Birrt",
				description:
					"Projektowanie CRM z użyciem PHP i MySql, naprawianie istniejących problemów, tworzenie raportów i monitorowanie infrastrktury.",
			},
			br: {
				year: "2021",
				title: "Best-Review",
				description:
					"Projektowanie szablonów i stron z wykorzystaniem Wordpress, PHP, React. Zarządzanie bazami danych. Modyfikowanie interakcji użytkownika z systemami płatności.",
			},
			walksee: {
				year: "2022 - obecnie",
				title: "Walksee",
				description:
					"Ulepszanie istniejącej architektury i rozwój technologii zdjęć sferycznych. Obsługa klientów w zakresie stron internetowych i systemów informatycznych.",
			},
			all: "To na tyle",
			thanks: "Dzięki za scrollowanie",
		},
		contact: {
			title: "Kontakt",
			name: "Imię",
			email: "Adres email",
			message: "Wiadomość",
			error: "😱 Coś poszło nie tak",
			success: "😍 Wiadomość dostarczona",
			submit: "Wyślij",
		},
	},
	copyright: "Wszystkie prawa zastrzeżone.",
};

export const en = {
	menu: {
		home: "Home",
		about: "About",
		technologies: "Technologies",
		projects: "Projects",
		"mile-steps": "Mile steps",
		contact: "Thanks for scrolling!",
	},
	themes: {
		system: "System",
		light: "Light",
		dark: "Dark",
	},
	sections: {
		home: {
			welcome: "Hi, my name is",
			developer: "Frontend Developer",
			enthusiast: "Web Enthusiast",
			enjoyer: "Technology Enjoyer",
			github: "My GitHub",
		},
		about: {
			title: "About me",
			description: `Hi, my name is Maciej Pełczyński. I am ${age} years old and specialize in programming web pages, with a preference for Frontend development. However, in my projects, I have often handled user security and data integrity, which has led me to work on the Backend as well. I have completed my computer science studies at the Poznan University of Technology in December 2024. In my spare time, I explore new technologies and enjoy amateur photo and video processing. Currently, I am particularly interested in Go and Zig. Below, you can find more details about the technologies I use and my experience.`,
		},
		technologies: {
			description: "Technologies I'm comfortable working with",
			"programming languages": "programming languages",
			styling: "styling",
			"js ecosystem": "js ecosystem",
			databases: "databases",
			other: "other",
		},
		projects: {
			description: "Some of my personal projects",
			spotterDescription:
				"A web app for visualizing personalized Spotify data. View your top tracks, artists and genres in different time spans. Background colors change depending on currently played album cover.",
			storageBoxDescription:
				"A social media like app for uploading, compressing, grouping and tagging media. User can browse through objects, single media, tags, other users, and like media as well. I've used BunnyCDN for media storage.",
			caseValueDescription:
				"Aplikacja przeznaczona do śledzenia wartości skrzynek Counter-Strike, z ręcznymi aktualizacjami cen i walut co 2 godziny. Zapewnia przybliżone wartości i pozwala użytkownikom odświeżać informacje o ekwipunku i profilu w celu uzyskania najnowszych informacji.",
			expensestrackerDescription:
				"Prosta aplikacja do śledzenia wydatków. Rejestruje i kategoryzuje wydatki, pomagając w zarządzaniu budżetem.",
		},
		"mile-steps": {
			beginning: {
				year: "2018",
				title: "You gotta start somewhere",
				description:
					"My very first self-made HTML file! I've also learned about CSS, vanilla JS and PHP shortly after.",
			},
			birrt: {
				year: "2020",
				title: "Birrt",
				description:
					"Design of CRM systems using PHP and MySql. Fixing existing bugs, reporting progress and monitoring infrastructure.",
			},
			br: {
				year: "2021",
				title: "Best-Review",
				description:
					"Template and page design using Wordpress, PHP, React. Databases management. Modifying user interaction with payment systems.",
			},
			walksee: {
				year: "2022 - now",
				title: "Walksee",
				description:
					"Further enhancement of existing architecture and development of spherical photos technologies. Satysfying clients with websites and information systems.",
			},
			all: "That would be all",
			thanks: "Thanks for scrolling",
		},
		contact: {
			title: "Contact",
			name: "Name",
			email: "Email",
			message: "Message",
			submit: "Submit",
			error: "😱 Something went wrong",
			success: "😍 Message has been delivered",
			contact: "Thanks for scrolling!",
		},
	},
	copyright: "All rights reserved.",
};

export const languageOptions = {
	pl: "pl",
	en: "us",
	flags: { pl: plFlag, en: usFlag },
	abbreviations: {
		en: "English",
		pl: "Polski",
	},
};
