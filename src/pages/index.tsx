import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { en, pl } from '../utils/translation';

const Home: NextPage = () => {
	const { locale, locales, asPath } = useRouter();
	const t = locale === 'en' ? en : pl;

	return (
		<div className="container mx-auto animate-fadeIn min-h-[100vh]">
			<h1>{t.title}</h1>
		</div>
	);
};

export default Home;

