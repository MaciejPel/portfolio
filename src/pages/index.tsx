import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { en, pl } from '../utils/translation';

interface HomeProps {
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Home: NextPage<HomeProps> = ({ setActive }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const refs = useRef<HTMLElement[] | null[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			let lowestDiff: [string, number] = ['home', 10000];
			refs.current.forEach((item) => {
				if (item && Math.abs(item.offsetTop - window.scrollY) < lowestDiff[1]) {
					lowestDiff = [item.id, Math.abs(item.offsetTop - window.scrollY)];
				}
			});
			setActive(lowestDiff[0]);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [setActive]);

	return (
		<>
			<section
				id="home"
				ref={(el) => (refs.current[0] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-50 dark:bg-zinc-900"
			></section>
			<section
				id="about"
				ref={(el) => (refs.current[1] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-50 dark:bg-zinc-900"
			></section>
			<section
				id="tech"
				ref={(el) => (refs.current[2] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-50 dark:bg-zinc-900"
			></section>
			<section
				id="projects"
				ref={(el) => (refs.current[3] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-50 dark:bg-zinc-900"
			></section>
			<section
				id="mile-steps"
				ref={(el) => (refs.current[4] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-50 dark:bg-zinc-900"
			></section>
		</>
	);
};

export default Home;

