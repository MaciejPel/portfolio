import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import autoAnimate from '@formkit/auto-animate';
import { en, pl } from '../../utils/translation';
import { technologies, technologyCategories, TypeUnion } from '../../utils/constants';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ToNext from '../ToNext';
import line1 from '../../../public/images/line1.svg';
import line2 from '../../../public/images/line2.svg';
import { useInView } from 'react-intersection-observer';

interface TechnologiesProps {
	active: string;
	setRef?: (e: HTMLElement) => HTMLElement;
}

const Technologies: React.FC<TechnologiesProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const animationParent = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.6 });

	const [techItems] = useState(
		Object.values(technologies).filter((item) => item.usage.includes('technologies'))
	);
	const [techFilter, setTechFilter] = useState<TypeUnion[]>([]);

	useEffect(() => {
		animationParent.current && autoAnimate(animationParent.current);
	}, [animationParent]);

	const lines = [
		{
			img: line1,
			css: `top-[77%] left-[-3%] ${
				inView ? 'lg:animate-fadeInLeft' : 'lg:-translate-x-[20%] lg:opacity-0'
			}`,
		},
		{
			img: line2,
			css: `top-[-5%] right-[-3%] ${
				inView ? 'lg:animate-fadeInRight' : 'lg:translate-x-[20%] lg:opacity-0'
			}`,
		},
	];

	return (
		<section
			id="technologies"
			ref={setRef}
			className="relative z-[1]"
		>
			{lines.map((line, index) => (
				<div
					key={index}
					className={`absolute -z-3 lg:block hidden w-[500px] -z-3 lg:transition-all lg:duration-[800ms] ${line.css}`}
				>
					<Image
						src={line.img}
						alt="line"
					/>
				</div>
			))}
			<div
				ref={ref}
				className="container mx-auto md:px-8 px-4 flex flex-col lg:gap-12 md:gap-4 gap-2 justify-center items-center md:py-12 py-8 md:mt-0 mt-8"
			>
				<div className="text-center relative">
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
						ref={animationParent}
						className="grid grid-cols-layout grid-rows-layout md:gap-4 gap-2 grid-flow-dense"
					>
						{techItems
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
				<div className="mt-4 md:flex hidden">
					<ToNext active={active} />
				</div>
			</div>
		</section>
	);
};

export default Technologies;
