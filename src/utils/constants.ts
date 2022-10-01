import { StaticImageData } from 'next/image';
import htmlcssLogo from '../../public/logos/htmlcss.svg';
import jstsLogo from '../../public/logos/jsts.svg';
import reactLogo from '../../public/logos/react.svg';
import nextLogo from '../../public/logos/next.svg';
import reduxLogo from '../../public/logos/redux.svg';
import nodeLogo from '../../public/logos/nodejs.svg';
import tailwindLogo from '../../public/logos/tailwind.svg';
import sassLogo from '../../public/logos/sass.svg';
import mysqlLogo from '../../public/logos/mysql.svg';
import mongoLogo from '../../public/logos/mongo.svg';
import prismaLogo from '../../public/logos/prisma.svg';
import pythonLogo from '../../public/logos/python.svg';
import gitLogo from '../../public/logos/git.svg';
import phpLogo from '../../public/logos/php.svg';
import wordpressLogo from '../../public/logos/wordpress.svg';

export interface TechnologiesInterface {
	name: string;
	img: StaticImageData;
	type: TypeUnion[];
}

export type TypeUnion =
	| 'programming languages'
	| 'styling'
	| 'databases'
	| 'frontend'
	| 'backend'
	| 'other';

export const navigation = [
	{ name: 'home', id: 'home' },
	{ name: 'about', id: 'about' },
	{ name: 'technologies', id: 'technologies' },
	{ name: 'projects', id: 'projects' },
	{ name: 'mile-steps', id: 'mile-steps' },
];

export const technologies: TechnologiesInterface[] = [
	{ name: 'HTML & CSS', img: htmlcssLogo, type: ['styling', 'frontend'] },
	{
		name: 'JavaScript & TypeScript',
		img: jstsLogo,
		type: ['programming languages', 'frontend', 'backend'],
	},
	{ name: 'React', img: reactLogo, type: ['frontend'] },
	{ name: 'NextJS', img: nextLogo, type: ['frontend'] },
	{ name: 'Redux', img: reduxLogo, type: ['frontend'] },
	{ name: 'NodeJS', img: nodeLogo, type: ['backend'] },
	{ name: 'Tailwind', img: tailwindLogo, type: ['styling', 'frontend'] },
	{ name: 'Sass', img: sassLogo, type: ['styling', 'frontend'] },
	{ name: 'MySQL', img: mysqlLogo, type: ['databases', 'backend'] },
	{ name: 'MongoDB', img: mongoLogo, type: ['databases', 'backend'] },
	{ name: 'Prisma', img: prismaLogo, type: ['databases', 'backend'] },
	{ name: 'Python', img: pythonLogo, type: ['programming languages'] },
	{ name: 'Git', img: gitLogo, type: ['other'] },
	{ name: 'PHP', img: phpLogo, type: ['programming languages', 'backend'] },
	{ name: 'Wordpress', img: wordpressLogo, type: ['other'] },
];

export const technologyCategories: TypeUnion[] = [
	'programming languages',
	'frontend',
	'styling',
	'backend',
	'databases',
	'other',
];
