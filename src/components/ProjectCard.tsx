import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';
import GithubIcon from './GithubIcon';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
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
	const { ref, inView } = useInView({ threshold: 0.4 });

	return (
		<div
			ref={ref}
			className={`flex flex-col-reverse relative cursor-default lg:transition-all lg:duration-[800ms] ${
				reversed
					? `lg:flex-row ${inView ? 'lg:animate-fadeInLeft' : 'lg:-translate-x-[20%] lg:opacity-0'}`
					: `lg:flex-row-reverse ${
							inView ? 'lg:animate-fadeInRight' : 'lg:translate-x-[20%] lg:opacity-0'
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
						className="rounded-lg dark:mobileHover:hover:bg-blue-600 mobileHover:hover:bg-amber-400 transition-colors p-2"
						aria-label="Github"
					>
						<GithubIcon className="w-6 h-6 fill-black dark:fill-white" />
					</a>
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg dark:mobileHover:hover:bg-blue-600 mobileHover:hover:bg-amber-400 transition-colors p-2"
						aria-label={title}
					>
						<ArrowTopRightOnSquareIcon className="w-6 h-6" />
					</a>
				</div>
			</div>
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className={`relative z-[1] ${reversed ? '-lg:translate-x-10' : 'lg:translate-x-10'}`}
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
