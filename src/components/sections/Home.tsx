import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import { en, pl } from '../../utils/translation';
import ToNext from '../ToNext';
import GithubIcon from '../GithubIcon';
import blob1 from '../../../public/images/blob1.svg';
import blob2 from '../../../public/images/blob2.svg';
import blob3 from '../../../public/images/blob3.svg';
import blob4 from '../../../public/images/blob4.svg';
import blob5 from '../../../public/images/blob5.svg';
import blob6 from '../../../public/images/blob6.svg';
import blob7 from '../../../public/images/blob7.svg';
import bg from '../../../public/images/bg.svg';
import bgMobile from '../../../public/images/bg-mobile.svg';

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

interface HomeProps {
	active: string;
	setRef?: (e: HTMLElement) => HTMLElement;
}

const Home: React.FC<HomeProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;

	return (
		<section
			id="home"
			ref={setRef}
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
					<div className="flex justify-center lg:justify-start">
						<a
							href="https://github.com/MaciejPel"
							target="_blank"
							rel="noreferrer"
							className="inline-flex gap-2 px-4 py-2 bg-amber-400 mobileHover:hover:bg-amber-500 dark:bg-blue-600 dark:mobileHover:hover:bg-blue-700 rounded-md font-medium text-md items-center"
						>
							<GithubIcon className="fill-black dark:fill-white w-6 h-6" />
							{t.sections.home.github}
						</a>
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
	);
};

export default Home;
