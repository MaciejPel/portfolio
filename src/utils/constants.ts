import { StaticImageData } from "next/image";
import htmlcssLogo from "../../public/logos/htmlcss.svg";
import jstsLogo from "../../public/logos/jsts.svg";
import tsLogo from "../../public/logos/typescript.svg";
import reactLogo from "../../public/logos/react.svg";
import nextLogo from "../../public/logos/next.svg";
import reduxLogo from "../../public/logos/redux.svg";
import svelteLogo from "../../public/logos/svelte.svg";
import nodeLogo from "../../public/logos/nodejs.svg";
import expressLogo from "../../public/logos/express.svg";
import tailwindLogo from "../../public/logos/tailwind.svg";
import sassLogo from "../../public/logos/sass.svg";
import bootstrapLogo from "../../public/logos/bootstrap.svg";
import mysqlLogo from "../../public/logos/mysql.svg";
import sqliteLogo from "../../public/logos/sqlite.svg";
import mongoLogo from "../../public/logos/mongo.svg";
import prismaLogo from "../../public/logos/prisma.svg";
import drizzleLogo from "../../public/logos/drizzle.svg";
import pythonLogo from "../../public/logos/python.svg";
import goLogo from "../../public/logos/go.svg";
import playwrightLogo from "../../public/logos/playwright.svg";
import linuxLogo from "../../public/logos/linux.svg";
import gitLogo from "../../public/logos/git.svg";
import figmaLogo from "../../public/logos/figma.svg";
import phpLogo from "../../public/logos/php.svg";
import spotifyLogo from "../../public/logos/spotify.svg";
import viteLogo from "../../public/logos/vite.svg";
import webpackLogo from "../../public/logos/webpack.svg";
import d3Logo from "../../public/logos/d3.svg";

export interface TechnologiesInterface {
	name: string;
	img: StaticImageData;
	type: TypeUnion[];
	usage: (
		| "technologies"
		| "spotter"
		| "storagebox"
		| "expensestracker"
		| "casevalue"
	)[];
}

export type TypeUnion =
	| "programming languages"
	| "styling"
	| "js ecosystem"
	| "databases"
	| "other";

export const technologyCategories: TypeUnion[] = [
	"programming languages",
	"styling",
	"js ecosystem",
	"databases",
	"other",
];

export const navigation = [
	"home",
	"about",
	"technologies",
	"projects",
	"mile-steps",
];

export const technologies: { [key: string]: TechnologiesInterface } = {
	htmlcss: {
		name: "HTML & CSS",
		img: htmlcssLogo,
		type: ["styling"],
		usage: ["technologies"],
	},
	jsts: {
		name: "JavaScript & TypeScript",
		img: jstsLogo,
		type: ["programming languages", "js ecosystem"],
		usage: ["technologies"],
	},
	react: {
		name: "React",
		img: reactLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "spotter", "storagebox"],
	},
	redux: {
		name: "Redux",
		img: reduxLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "spotter"],
	},
	nextjs: {
		name: "NextJS",
		img: nextLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "storagebox"],
	},
	svelte: {
		name: "Svelte/SvelteKit",
		img: svelteLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "casevalue", "expensestracker"],
	},
	nodejs: {
		name: "NodeJS",
		img: nodeLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "spotter", "storagebox"],
	},
	ts: {
		name: "TypeScript",
		img: tsLogo,
		type: ["programming languages", "js ecosystem"],
		usage: [
			"spotter",
			"storagebox",
			"casevalue",
			"storagebox",
			"expensestracker",
		],
	},
	express: {
		name: "ExpressJS",
		img: expressLogo,
		type: ["js ecosystem"],
		usage: ["technologies", "spotter"],
	},
	tailwind: {
		name: "Tailwind",
		img: tailwindLogo,
		type: ["styling"],
		usage: ["technologies", "storagebox", "casevalue", "expensestracker"],
	},
	sass: {
		name: "Sass",
		img: sassLogo,
		type: ["styling"],
		usage: ["technologies", "spotter"],
	},
	bootstrap: {
		name: "Bootstrap",
		img: bootstrapLogo,
		type: ["styling"],
		usage: ["technologies"],
	},
	mysql: {
		name: "MySQL",
		img: mysqlLogo,
		type: ["databases"],
		usage: ["technologies"],
	},
	sqlite: {
		name: "SQLite",
		img: sqliteLogo,
		type: ["databases"],
		usage: ["casevalue", "expensestracker"],
	},
	mongodb: {
		name: "MongoDB",
		img: mongoLogo,
		type: ["databases"],
		usage: ["technologies", "storagebox"],
	},
	drizzle: {
		name: "Drizzle",
		img: drizzleLogo,
		type: ["databases", "js ecosystem"],
		usage: ["technologies", "expensestracker", "casevalue"],
	},
	prisma: {
		name: "Prisma",
		img: prismaLogo,
		type: ["databases", "js ecosystem"],
		usage: ["technologies", "storagebox"],
	},
	playwright: {
		name: "Playwright",
		img: playwrightLogo,
		type: ["js ecosystem"],
		usage: ["technologies"],
	},
	python: {
		name: "Python",
		img: pythonLogo,
		type: ["programming languages"],
		usage: ["technologies"],
	},
	go: {
		name: "Go",
		img: goLogo,
		type: ["programming languages"],
		usage: ["technologies"],
	},
	linux: {
		name: "Linux",
		img: linuxLogo,
		type: ["other"],
		usage: ["technologies"],
	},
	git: { name: "Git", img: gitLogo, type: ["other"], usage: ["technologies"] },
	figma: {
		name: "Figma",
		img: figmaLogo,
		type: ["other"],
		usage: ["technologies"],
	},
	php: {
		name: "PHP",
		img: phpLogo,
		type: ["programming languages"],
		usage: ["technologies"],
	},
	spotify: {
		name: "Spotify API",
		img: spotifyLogo,
		type: ["other"],
		usage: ["spotter"],
	},
	vite: {
		name: "Vite",
		img: viteLogo,
		type: ["js ecosystem"],
		usage: ["casevalue", "expensestracker", "technologies"],
	},
	webpack: {
		name: "Webpack",
		img: webpackLogo,
		type: ["js ecosystem"],
		usage: ["technologies"],
	},
	d3: {
		name: "D3js",
		img: d3Logo,
		type: ["js ecosystem"],
		usage: ["casevalue"],
	},
};
