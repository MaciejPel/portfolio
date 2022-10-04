import { StaticImageData } from 'next/image';
import htmlcssLogo from '../../public/logos/htmlcss.svg';
import jstsLogo from '../../public/logos/jsts.svg';
import tsLogo from '../../public/logos/typescript.svg';
import reactLogo from '../../public/logos/react.svg';
import nextLogo from '../../public/logos/next.svg';
import reduxLogo from '../../public/logos/redux.svg';
import nodeLogo from '../../public/logos/nodejs.svg';
import expressLogo from '../../public/logos/express.svg';
import tailwindLogo from '../../public/logos/tailwind.svg';
import sassLogo from '../../public/logos/sass.svg';
import mysqlLogo from '../../public/logos/mysql.svg';
import mongoLogo from '../../public/logos/mongo.svg';
import prismaLogo from '../../public/logos/prisma.svg';
import pythonLogo from '../../public/logos/python.svg';
import gitLogo from '../../public/logos/git.svg';
import phpLogo from '../../public/logos/php.svg';
import wordpressLogo from '../../public/logos/wordpress.svg';
import spotifyLogo from '../../public/logos/spotify.svg';
export interface TechnologiesInterface {
	name: string;
	img: StaticImageData;
	type: TypeUnion[];
	usage: ('technologies' | 'spotter' | 'storagebox')[];
}

export type TypeUnion =
	| 'programming languages'
	| 'styling'
	| 'databases'
	| 'frontend'
	| 'backend'
	| 'other';

export const technologyCategories: TypeUnion[] = [
	'programming languages',
	'frontend',
	'styling',
	'backend',
	'databases',
	'other',
];

export const navigation = ['home', 'about', 'technologies', 'projects', 'mile-steps'];

export const technologies: { [key: string]: TechnologiesInterface } = {
	htmlcss: {
		name: 'HTML & CSS',
		img: htmlcssLogo,
		type: ['styling', 'frontend'],
		usage: ['technologies'],
	},
	jsts: {
		name: 'JavaScript & TypeScript',
		img: jstsLogo,
		type: ['programming languages', 'frontend', 'backend'],
		usage: ['technologies'],
	},
	react: {
		name: 'React',
		img: reactLogo,
		type: ['frontend'],
		usage: ['technologies', 'spotter', 'storagebox'],
	},
	nextjs: {
		name: 'Nextjs',
		img: nextLogo,
		type: ['frontend'],
		usage: ['technologies', 'storagebox'],
	},
	redux: { name: 'Redux', img: reduxLogo, type: ['frontend'], usage: ['technologies', 'spotter'] },
	nodejs: {
		name: 'NodeJS',
		img: nodeLogo,
		type: ['backend'],
		usage: ['technologies', 'spotter', 'storagebox'],
	},
	ts: {
		name: 'TypeScript',
		img: tsLogo,
		type: ['programming languages', 'frontend', 'backend'],
		usage: ['spotter', 'storagebox'],
	},
	express: {
		name: 'ExpressJS',
		img: expressLogo,
		type: ['backend'],
		usage: ['technologies', 'spotter'],
	},
	tailwind: {
		name: 'Tailwind',
		img: tailwindLogo,
		type: ['styling', 'frontend'],
		usage: ['technologies', 'storagebox'],
	},
	sass: {
		name: 'Sass',
		img: sassLogo,
		type: ['styling', 'frontend'],
		usage: ['technologies', 'spotter'],
	},
	mysql: { name: 'MySQL', img: mysqlLogo, type: ['databases'], usage: ['technologies'] },
	mongodb: {
		name: 'MongoDB',
		img: mongoLogo,
		type: ['databases'],
		usage: ['technologies', 'storagebox'],
	},
	prisma: {
		name: 'Prisma',
		img: prismaLogo,
		type: ['databases', 'backend'],
		usage: ['technologies', 'storagebox'],
	},
	python: {
		name: 'Python',
		img: pythonLogo,
		type: ['programming languages'],
		usage: ['technologies'],
	},
	git: { name: 'Git', img: gitLogo, type: ['other'], usage: ['technologies'] },
	php: {
		name: 'PHP',
		img: phpLogo,
		type: ['programming languages', 'backend'],
		usage: ['technologies'],
	},
	wordpress: { name: 'Wordpress', img: wordpressLogo, type: ['other'], usage: ['technologies'] },
	spotify: { name: 'spotifyApi', img: spotifyLogo, type: ['other'], usage: ['spotter'] },
};
