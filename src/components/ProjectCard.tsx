import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import GithubIcon from './GithubIcon';
import { useEffect } from 'react';

interface ProjectCardProps {
	title: string;
	description: string;
	image: StaticImageData;
	url: string;
	git: string;
	badges: React.ReactNode;
	reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	image,
	url,
	git,
	badges,
	reversed,
}) => {
	const { ref, inView } = useInView();

	return (
		<div
			ref={ref}
			className={`flex flex-col-reverse relative cursor-default ${
				reversed
					? `lg:flex-row ${inView ? 'lg:animate-fadeInLeft' : 'lg:opacity-0 lg:-translate-x-full'}`
					: `lg:flex-row-reverse ${
							inView ? 'lg:animate-fadeInRight' : 'lg:opacity-0 lg:-translate-x-full'
					  }`
			}`}
		>
			<div
				className={`relative flex flex-col justify-center z-[2] gap-3 text-center ${
					reversed ? 'lg:translate-x-10 lg:text-left' : 'lg:-translate-x-10 lg:text-right'
				}`}
			>
				<a
					href={url}
					className="font-mono text-3xl hover:underline"
					target="_blank"
					rel="noreferrer"
				>
					{title}
				</a>
				<div className="lg:bg-amber-400 lg:dark:bg-blue-700 rounded-xl w-full p-4 dark:bg-blue-600 bg-amber-300 duration-300 shadow-xl">
					{description}
				</div>
				<div className={`font-mono flex gap-2 ${reversed ? 'justify-start' : 'justify-end'}`}>
					<div
						className={`lg:max-w-[80%] flex flex-wrap justify-center lg:gap-2 gap-1 ${
							reversed ? 'lg:justify-start' : 'lg:justify-end'
						}`}
					>
						{badges}
					</div>
				</div>
				<div
					className={`flex justify-center gap-2 ${
						reversed ? 'lg:justify-start' : 'lg:justify-end'
					}`}
				>
					<a
						href={git}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg dark:hover:bg-blue-600 hover:bg-amber-400 transition-colors p-2"
					>
						<GithubIcon className="w-6 h-6 fill-black dark:fill-white" />
					</a>
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg dark:hover:bg-blue-600 hover:bg-amber-400 transition-colors p-2"
					>
						<ArrowTopRightOnSquareIcon className="w-6 h-6" />
					</a>
				</div>
			</div>
			<a
				href={url}
				target="_blank"
				className={`relative z-[1] ${reversed ? '-lg:translate-x-10' : 'lg:translate-x-10'}`}
				rel="noreferrer"
			>
				<Image
					src={image}
					alt={title}
					className="rounded-3xl lg:grayscale-[66%] lg:hover:grayscale-0 transition-all duration-300"
				/>
			</a>
		</div>
	);
};
export default ProjectCard;
