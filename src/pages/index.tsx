import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useScroll from '../hooks/useScroll';
import { en, pl } from '../utils/translation';
import { technologies, technologyCategories, TypeUnion } from '../utils/constants';
import Typewriter from 'typewriter-effect';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ToNext from '../components/ToNext';
import blob1 from '../../public/blobs/blob1.svg';
import blob2 from '../../public/blobs/blob2.svg';

interface HomeProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Home: NextPage<HomeProps> = ({ active, setActive }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const { scrollY } = useScroll();
	const refs = useRef<HTMLElement[] | null[]>([]);

	const [tech, setTech] = useState<TypeUnion[]>([]);

	useEffect(() => {
		let lowestDiff: [string, number] = ['home', 10000];
		refs.current.forEach((item) => {
			if (item && Math.abs(item.offsetTop - scrollY) < lowestDiff[1]) {
				lowestDiff = [item.id, Math.abs(item.offsetTop - window.scrollY)];
			}
		});
		setActive(lowestDiff[0]);
	}, [scrollY, setActive]);

	return (
		<>
			<section
				id="home"
				ref={(el) => (refs.current[0] = el)}
				className="animate-fadeIn min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center relative z-10"
			>
				<div className="absolute w-24 h-24 -z-3 bottom-[22%] left-[3%] animate-spinSlow">
					<Image
						src={blob1}
						alt="blob"
					/>
				</div>
				<div className="absolute w-40 h-40 -z-3 top-[27%] right-[12%] animate-spinSlow">
					<Image
						src={blob2}
						alt="blob"
					/>
				</div>
				<div className="container mx-auto px-12 flex">
					<div className="w-1/2 flex flex-col gap-y-4 mb-12">
						<div>
							<div className="text-lg font-medium text-zinc-600 dark:text-zinc-300 -mb-2">
								{t.sections.home.welcome}
							</div>
							<div className="text-7xl font-extrabold">Maciej👋</div>
						</div>
						<div className="text-zinc-600 dark:text-zinc-300 text-5xl font-semibold font-mono">
							&lt;
							<Typewriter
								options={{
									strings: [
										t.sections.home.developer,
										t.sections.home.enthusiast,
										t.sections.home.enjoyer,
									],
									autoStart: true,
									loop: true,
								}}
							/>
							/&gt;
						</div>
					</div>
					<div className="w-1/2"></div>
				</div>
				<div className="absolute bottom-5 ">
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="about"
				ref={(el) => (refs.current[1] = el)}
				className="min-h-screen from-white to-zinc-200  dark:from-black dark:to-zinc-900 bg-gradient-to-b flex justify-center items-center"
			>
				about
				<ToNext active={active} />
			</section>
			<section
				id="technologies"
				ref={(el) => (refs.current[2] = el)}
				className="from-zinc-200 to-zinc-100  dark:from-zinc-900 dark:to-zinc-800 bg-gradient-to-b md:py-24 py-8 relative z-[1]"
			>
				<div className="container mx-auto px-4 flex flex-col md:gap-20 gap-8 justify-center items-center">
					<div className="text-center">
						<div className="text-4xl font-bold">{t.menu.technologies}</div>
						<div>{t.sections.technologies.description}</div>
					</div>
					<div className="w-full flex flex-col gap-2">
						<div className="w-full flex justify-end gap-x-4 font-medium flex-wrap">
							{technologyCategories.map((category, index) => (
								<div
									key={index}
									className={`btn-active cursor-pointer select-none ${
										tech.includes(category) ? 'active' : ''
									}`}
									onClick={() => {
										tech.includes(category)
											? setTech(tech.filter((c) => c != category))
											: setTech([...tech, category]);
									}}
								>
									{t.sections.technologies[category as keyof typeof t.sections.technologies]}
								</div>
							))}
							<button
								type="button"
								title="Reset"
								className="dark:hover:bg-blue-600 hover:bg-amber-400 rounded inline-flex cursor-pointer select-none px-2"
								onClick={() => setTech([])}
							>
								<XMarkIcon className="w-6" />
							</button>
						</div>
						<div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 2xl:gap-6 md:gap-4 2xl:grid-cols-7 grid-cols-2">
							{technologies.map((item, index) => (
								<div
									key={index}
									className={`bg-zinc-50 dark:bg-zinc-700 rounded px-4 py-2 shadow-sm flex-col relative flex gap-3 select-none hover:shadow-md transition-all border-[1px] dark:border-zinc-600 group ${
										tech.length > 0
											? tech.every((i) => item.type.includes(i))
												? 'from-amber-200 bg-gradient-to-tl dark:from-blue-500'
												: ''
											: ''
									}`}
								>
									<div className="h-4/5 flex flex-col justify-center group-hover:scale-110 transition-transform p-2">
										<Image
											src={item.img}
											alt={item.name}
										/>
									</div>
									<div className="text-center font-medium text-lg">{item.name}</div>
								</div>
							))}
						</div>
					</div>
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="projects"
				ref={(el) => (refs.current[3] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center border-y-[1px]"
			>
				projects
				<ToNext active={active} />
			</section>
			<section
				id="mile-steps"
				ref={(el) => (refs.current[4] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
			>
				mile-steps
				<ToNext active={active} />
			</section>
			<section
				id="contact"
				className="animate-fadeIn min-h-[60vh] bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
			>
				contact
			</section>
		</>
	);
};

export default Home;

