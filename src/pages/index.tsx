import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { en, pl } from '../utils/translation';
import vercel from '../../public/vercel.svg';
import Image from 'next/image';

const Home: NextPage = () => {
	const { locale, locales, asPath } = useRouter();
	const t = locale === 'en' ? en : pl;

	return (
		<div className="animate-fadeIn">
			<Image
				src={vercel}
				width={1920}
				height={1080}
				alt=""
			/>
			<h1>{t.title}</h1>
		</div>
	);
};

export default Home;

