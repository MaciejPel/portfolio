import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useScroll from '../hooks/useScroll';
import autoAnimate from '@formkit/auto-animate';
import { en, pl } from '../utils/translation';
import { technologies, technologyCategories, TypeUnion } from '../utils/constants';
import Typewriter from 'typewriter-effect';
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import ToNext from '../components/ToNext';
import ProjectCard from '../components/ProjectCard';
import bg from '../../public/images/bg.svg';
import bgMobile from '../../public/images/bg-mobile.svg';
import avatar from '../../public/images/avatar.jpg';
import blob1 from '../../public/images/blob1.svg';
import blob2 from '../../public/images/blob2.svg';
import blob3 from '../../public/images/blob3.svg';
import blob4 from '../../public/images/blob4.svg';
import blob5 from '../../public/images/blob5.svg';
import blob6 from '../../public/images/blob6.svg';
import blob7 from '../../public/images/blob7.svg';
import triangle from '../../public/images/triangle.svg';
import sigma from '../../public/images/sigma.svg';
import circle from '../../public/images/circle.svg';
import square from '../../public/images/square.svg';
import integral from '../../public/images/integral.svg';
import project0 from '../../public/images/project0.jpeg';
import project1 from '../../public/images/project1.jpeg';
import Badge from '../components/Badge';

const blobs = [
	{
		img: blob1,
		css: 'w-20 h-20 lg:block hidden -z-3 top-[17%] left-[12%] animate-spinSlowInfinite',
	},
	{ img: blob2, css: 'w-16 h-16 lg:block hidden -z-3 top-[14%] right-[18%] rotate-45' },
	{ img: blob3, css: 'w-20 h-20 lg:block hidden -z-3 bottom-[15%] left-[15%]' },
	{ img: blob4, css: 'w-16 h-16 lg:block hidden -z-3 top-[30%] left-[34%] -rotate-45' },
	{ img: blob5, css: 'w-12 h-12 lg:block hidden -z-3 bottom-[20%] left-[40%] animate-scale' },
	{ img: blob6, css: 'w-20 h-20 lg:block hidden -z-3 bottom-[10%] right-[9%] animate-spinSlow' },
	{
		img: blob7,
		css: 'lg:block hidden -z-3 top-[29%] left-[57%] animate-spinSlowInfiniteReverse',
	},
];

const symbols = [
	{ img: sigma, css: 'w-24 h-24 lg:block hidden -z-3 left-[5%] top-[125%] -rotate-45' },
	{ img: triangle, css: 'w-40 h-40 lg:block hidden -z-3 left-[22%] top-[148%] rotate-12' },
	{ img: circle, css: 'w-40 h-40 lg:block hidden -z-3 left-[70%] top-[148%]' },
	{ img: square, css: 'w-40 h-40 lg:block hidden -z-3 left-[46%] top-[155%] rotate-[250deg]' },
	{ img: integral, css: 'w-20 h-20 lg:block hidden -z-3 left-[90%] top-[125%] rotate-12' },
];

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
	const [items] = useState(
		Object.values(technologies).filter((item) => item.usage.includes('technologies'))
	);
	const [techFilter, setTechFilter] = useState<TypeUnion[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

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

	return (
		<>
			<section
				id="home"
				ref={(el) => (refs.current[0] = el)}
				className="animate-fadeIn min-h-screen flex flex-col justify-center items-center relative z-10"
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
				<div className="absolute bottom-10">
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="about"
				ref={(el) => (refs.current[1] = el)}
			>
				{symbols.map((symbol, index) => (
					<div
						key={index}
						className={`absolute -z-3 ${symbol.css}`}
					>
						<Image
							src={symbol.img}
							alt="symbol"
						/>
					</div>
				))}
				<div className="container mx-auto lg:py-36 xl:px-28 flex relative z-10">
					<div className="lg:grid lg:grid-cols-6 flex flex-col rounded-xl p-4 lg:gap-10 gap-4">
						<div className="col-span-2 flex lg:justify-end justify-center">
							<Image
								src={avatar}
								alt="avatar"
								className="rounded-full"
							/>
						</div>
						<div className="col-span-4 flex flex-col justify-center gap-2 lg:gap-0">
							<div className="lg:text-5xl text-3xl font-bold text-center lg:text-left">
								{t.sections.about.title}
							</div>
							<p className="font-normal text-center lg:text-left">{t.sections.about.description}</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center lg:pt-40">
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="technologies"
				ref={(el) => (refs.current[2] = el)}
				className="md:py-24 py-8 relative z-[1]"
			>
				<div className="container mx-auto md:px-8 px-4 flex flex-col md:gap-12 gap-8 justify-center items-center">
					<div className="text-center">
						<div className="md:text-5xl text-3xl font-bold">{t.menu.technologies}</div>
						<div className="font-light">{t.sections.technologies.description}</div>
					</div>
					<div className="w-full flex flex-col gap-2">
						<div className="w-full flex justify-end gap-x-4 font-medium flex-wrap">
							{technologyCategories.map((category, index) => (
								<div
									key={index}
									className={`btn-active cursor-pointer select-none ${
										techFilter.includes(category) ? 'active' : ''
									}`}
									onClick={() => {
										techFilter.includes(category)
											? setTechFilter(techFilter.filter((c) => c != category))
											: setTechFilter([...techFilter, category]);
									}}
								>
									{t.sections.technologies[category as keyof typeof t.sections.technologies]}
								</div>
							))}
							<button
								type="button"
								title="Reset"
								className="dark:hover:bg-blue-600 hover:bg-amber-400 rounded inline-flex cursor-pointer select-none px-2"
								onClick={() => setTechFilter([])}
							>
								<XMarkIcon className="w-6" />
							</button>
						</div>
						<div
							ref={parent}
							className="grid grid-cols-layout grid-rows-layout md:gap-4 gap-2 grid-flow-dense"
						>
							{items
								.filter((item) => techFilter.every((i) => item.type.includes(i)))
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
				className="py-16"
			>
				<div className="container mx-auto flex flex-col lg:gap-16 gap-4 items-center lg:px-16 px-4">
					<div className="text-center">
						<div className="md:text-5xl text-3xl font-bold">{t.menu.projects}</div>
						<div className="font-light md:mt-1">{t.sections.projects.description}</div>
					</div>
					<div className="flex flex-col lg:gap-16 gap-6">
						<ProjectCard
							title="Spotter"
							description={t.sections.projects.spotterDescription}
							image={project0}
							url="https://spotterv1.onrender.com/"
							git="https://github.com/MaciejPel/spotterv1"
							badges={Object.values(technologies)
								.filter((item) => item.usage.includes('spotter'))
								.map((item, index) => (
									<Badge
										key={index}
										title={item.name}
										icon={item.img}
									/>
								))}
						/>
						<ProjectCard
							title="StorageBox"
							description={t.sections.projects.storageBoxDescription}
							image={project1}
							url="https://storage-box-pub.vercel.app/"
							git="https://github.com/MaciejPel/storageBoxV1"
							badges={Object.values(technologies)
								.filter((item) => item.usage.includes('storagebox'))
								.map((item, index) => (
									<Badge
										key={index}
										title={item.name}
										icon={item.img}
									/>
								))}
							reversed={true}
						/>
					</div>
				</div>
				<div className="flex justify-center py-24">
					<ToNext active={active} />
				</div>
			</section>
			<section
				id="mile-steps"
				ref={(el) => (refs.current[4] = el)}
				className="py-24"
			>
				<div className="lg:text-5xl font-bold text-3xl mb-2 text-center">
					{t.menu['mile-steps']}
				</div>
				<div className="container mx-auto	px-8 py-24">
					<div>
						<div className="grid md:grid-cols-11 grid-rows-5 md:grid-rows-none">
							<div className="md:col-span-2 row-span-1 text-center">
								<div>2018</div>
								<div>Description</div>
							</div>
							<div className="flex items-center md:col-span-1 row-span-1 justify-center">
								<ChevronRightIcon className="w-6 md:rotate-0 rotate-90" />
							</div>
							<div className="md:col-span-2 row-span-1 text-center">
								<div>2020</div>
								<div>Description</div>
							</div>
							<div className="flex items-center md:col-span-1 row-span-1 justify-center">
								<ChevronRightIcon className="w-6 md:rotate-0 rotate-90" />
							</div>
							<div className="md:col-span-2 grid-rows-1 text-center">
								<div>2021</div>
								<div>Description</div>
							</div>
							<div className="flex items-center md:col-span-1 row-span-1 justify-center">
								<ChevronRightIcon className="w-6 md:rotate-0 rotate-90" />
							</div>
							<div className="md:col-span-2 grid-rows-1 text-center">
								<div>2022</div>
								<div>Description</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center w-full py-24">
						<ToNext active={active} />
					</div>
				</div>
			</section>
			<section
				id="contact"
				ref={(el) => (refs.current[5] = el)}
				className="md:py-16 py-2"
			>
				<div className="container mx-auto 2xl:px-96 xl:px-64 lg:px-24 md:px-8 p-4">
					<div className="lg:text-5xl font-bold text-3xl mb-2">{t.sections.contact.title}</div>
					<form
						className="flex justify-center flex-col gap-4"
						onSubmit={handleSubmit}
					>
						<div className="flex gap-4 md:flex-row flex-col">
							<input
								type="text"
								placeholder={t.sections.contact.name}
								id="name"
								name="name"
								autoComplete="off"
								className="w-full p-4 rounded outline-none shadow bg-white dark:bg-stone-700"
							/>
							<input
								type="email"
								placeholder={t.sections.contact.email}
								id="email"
								name="email"
								autoComplete="off"
								className="w-full p-4 rounded outline-none shadow bg-white dark:bg-stone-700"
							/>
						</div>
						<div className="flex">
							<textarea
								placeholder={t.sections.contact.message}
								id="message"
								name="message"
								rows={8}
								className="w-full p-4 rounded outline-none shadow resize-none bg-white dark:bg-stone-700"
							/>
						</div>
						<div className="flex justify-between">
							<div
								className={`px-4 py-2 rounded shadow hover:bg-red-500 transition-colors bg-white dark:bg-stone-700 ${
									false ? 'cursor-pointer' : 'opacity-0 cursor-auto select-none'
								}`}
							>
								Error message
							</div>
							<input
								type="submit"
								value={t.sections.contact.submit}
								className="px-4 py-2 rounded shadow cursor-pointer transition-colors hover:bg-amber-400 dark:hover:bg-blue-600 bg-white dark:bg-stone-700"
							/>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Index;
