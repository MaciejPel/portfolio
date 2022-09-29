import { StaticImageData } from 'next/image';
import htmlcssLogo from '../../public/logos/htmlcss.png';
import jstsLogo from '../../public/logos/jsts.png';
import reactLogo from '../../public/logos/react.png';
import nextLogo from '../../public/logos/next.png';
import reduxLogo from '../../public/logos/redux.png';
import nodeLogo from '../../public/logos/nodejs.png';
import tailwindLogo from '../../public/logos/tailwind.png';
import sassLogo from '../../public/logos/sass.png';
import mysqlLogo from '../../public/logos/mysql.png';
import mongoLogo from '../../public/logos/mongo.png';
import pythonLogo from '../../public/logos/python.png';
import gitLogo from '../../public/logos/git.png';
import phpLogo from '../../public/logos/php.png';
import wordpressLogo from '../../public/logos/wordpress.png';

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
	{ name: 'Python', img: pythonLogo, type: ['programming languages'] },
	{ name: 'Git', img: gitLogo, type: ['other'] },
	{ name: 'PHP', img: phpLogo, type: ['programming languages', 'backend'] },
	{ name: 'Wordpress', img: wordpressLogo, type: ['other'] },
];

export const technologyCategories: TypeUnion[] = [
	'programming languages',
	'styling',
	'databases',
	'frontend',
	'backend',
	'other',
];
