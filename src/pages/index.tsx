import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useScroll from '../hooks/useScroll';
import autoAnimate from '@formkit/auto-animate';
import { en, pl } from '../utils/translation';
import { technologies, technologyCategories, TypeUnion } from '../utils/constants';
import Typewriter from 'typewriter-effect';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ToNext from '../components/ToNext';
import bg from '../../public/images/bg.svg';
import bgMobile from '../../public/images/bg-mobile.svg';
import blob1 from '../../public/images/blob1.svg';
import blob2 from '../../public/images/blob2.svg';
import blob3 from '../../public/images/blob3.svg';
import blob4 from '../../public/images/blob4.svg';
import blob5 from '../../public/images/blob5.svg';
import blob6 from '../../public/images/blob6.svg';
import blob7 from '../../public/images/blob7.svg';
interface IndexProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Index: NextPage<IndexProps> = ({ active, setActive }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const { scrollY } = useScroll();
	const refs = useRef<HTMLElement[] | null[]>([]);

	const parent = useRef(null);
	const [items] = useState(technologies);
	const [tech, setTech] = useState<TypeUnion[]>([]);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	useEffect(() => {
		let lowestDiff: [string, number] = ['home', 10000];
		refs.current.forEach((item) => {
			if (item && Math.abs(item.offsetTop - scrollY) < lowestDiff[1]) {
				lowestDiff = [item.id, Math.abs(item.offsetTop - window.scrollY)];
			}
		});
		setActive(lowestDiff[0]);
	}, [scrollY, setActive]);

	const blobs = [
		{
			img: blob1,
			css: 'w-20 h-20 lg:block hidden -z-3 top-[17%] left-[12%] animate-spinSlowInfinite',
		},
		{ img: blob4, css: 'w-16 h-16 lg:block hidden -z-3 top-[30%] left-[39%] rotate-45' },
		{ img: blob2, css: 'w-16 h-16 lg:block hidden -z-3 top-[14%] right-[18%] rotate-45' },
		{ img: blob3, css: 'w-20 h-20 lg:block hidden -z-3 bottom-[15%] left-[15%]' },
		{ img: blob5, css: 'w-12 h-12 lg:block hidden -z-3 bottom-[20%] left-[40%] animate-scale' },
		{ img: blob6, css: 'w-20 h-20 lg:block hidden -z-3 bottom-[10%] right-[9%] animate-spinSlow' },
		{
			img: blob7,
			css: 'lg:block hidden -z-3 top-[29%] left-[57%] animate-spinSlowInfiniteReverse',
		},
	];

	return (
		<>
			<section
				id="home"
				ref={(el) => (refs.current[0] = el)}
				className="animate-fadeIn min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center relative z-10"
			>
				{blobs.map((blob, index) => (
					<div
						key={index}
						className={`absolute -z-3 ${blob.css}`}
					>
						<Image
							src={blob.img}
							alt="blob"
						/>
					</div>
				))}
				<div className="container mx-auto lg:px-24 flex lg:flex-row flex-col pt-20">
					<div className="lg:w-1/2 flex flex-col gap-y-4 mb-12 justify-center">
						<div className="text-center lg:text-left">
							<div className="lg:text-lg font-medium text-zinc-600 dark:text-zinc-300 -mb-2 text-xl">
								{t.sections.home.welcome}
							</div>
							<div className="lg:text-7xl text-5xl font-extrabold">Maciej👋</div>
						</div>
						<div className="text-zinc-600 dark:text-zinc-300 lg:text-5xl text-2xl font-semibold font-mono text-center lg:text-left">
							{'<'}
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
							{'/>'}
						</div>
					</div>
					<div className="lg:w-1/2 lg:block hidden">
						<Image
							src={bg}
							alt="bg"
						/>
					</div>
					<div className="w-full lg:hidden block">
						<Image
							src={bgMobile}
							alt="bg"
						/>
					</div>
				</div>
				<div className="absolute bottom-5 ">
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="about"
				ref={(el) => (refs.current[1] = el)}
				className="min-h-screen from-white to-zinc-100  dark:from-black dark:to-zinc-900 bg-gradient-to-b flex justify-center items-center"
			>
				about
				<ToNext active={active} />
			</section>
			<section
				id="technologies"
				ref={(el) => (refs.current[2] = el)}
				className="from-zinc-100 to-zinc-200  dark:from-zinc-900 dark:to-zinc-800 bg-gradient-to-b md:py-24 py-8 relative z-[1]"
			>
				<div className="container mx-auto px-4 flex flex-col md:gap-12 gap-8 justify-center items-center">
					<div className="text-center">
						<div className="text-5xl font-bold">{t.menu.technologies}</div>
						<div className="font-light">{t.sections.technologies.description}</div>
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
						<div
							ref={parent}
							className="grid grid-cols-layout grid-rows-layout md:gap-4 gap-2 grid-flow-dense"
						>
							{items
								.filter((item) => tech.every((i) => item.type.includes(i)))
								.map((item) => (
									<div
										key={item.name}
										className="bg-zinc-50 dark:bg-zinc-800 rounded px-4 py-2 shadow-sm flex-col relative from-yellow-200 bg-gradient-to-tl dark:from-blue-600 flex gap-3 select-none hover:shadow-md transition-all group hover:animate-gradient cursor-pointer h-[230px]"
										style={{ backgroundSize: '400% 400%' }}
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
				className="animate-fadeIn min-h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center"
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

export default Index;
