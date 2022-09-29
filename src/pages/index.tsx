import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { en, pl } from '../utils/translation';
import { technologies, technologyCategories, TypeUnion } from '../utils/constants';
import Image from 'next/image';

interface HomeProps {
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Home: NextPage<HomeProps> = ({ setActive }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const refs = useRef<HTMLElement[] | null[]>([]);

	const [tech, setTech] = useState<TypeUnion[]>([]);

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
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
			>
				home
			</section>
			<section
				id="about"
				ref={(el) => (refs.current[1] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
			>
				about
			</section>
			<section
				id="technologies"
				ref={(el) => (refs.current[2] = el)}
				className="animate-fadeIn bg-zinc-100 dark:bg-zinc-800 py-24 border-y-2 relative z-10"
			>
				<div className="container mx-auto px-4 flex flex-col gap-6 justify-center items-center">
					<div className="text-center">
						<div className="text-4xl font-bold">{t.menu.technologies}</div>
						<div>{t.sections.technologies.description}</div>
					</div>
					<div className="w-full flex flex-col gap-2">
						<div className="w-full flex justify-end gap-4 font-medium flex-wrap">
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
									{category}
								</div>
							))}
						</div>
						<div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 2xl:gap-6 md:gap-4 2xl:grid-cols-7 grid-cols-2">
							{technologies
								.filter((item) => tech.every((i) => item.type.includes(i)))
								.map((item, index) => (
									<div
										key={index}
										className="bg-zinc-50 dark:bg-zinc-700 rounded px-4 py-2 shadow-sm flex-col relative hover:bg-amber-400 hover:border-amber-400 dark:hover:bg-blue-400 dark:hover:border-blue-400 flex gap-3 select-none hover:shadow-md transition-all border-[1px] dark:border-zinc-600 group"
									>
										<div className="h-4/5 flex flex-col justify-center group-hover:scale-110 transition-transform p-2">
											<Image
												src={item.img}
												alt={item.name}
											/>
										</div>
										<div className="text-center">
											<div className="font-medium text-lg">{item.name}</div>
											<div className={`font-light text-sm`}>
												{item.type.map((t, i) => (
													<>
														{i ? ', ' : ''}
														<span className={`${tech.includes(t) ? 'underline' : ''}`}>{t}</span>
													</>
												))}
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
			<section
				id="projects"
				ref={(el) => (refs.current[3] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center border-y-[1px]"
			>
				projects
			</section>
			<section
				id="mile-steps"
				ref={(el) => (refs.current[4] = el)}
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
			>
				mile-steps
			</section>
		</>
	);
};

export default Home;

