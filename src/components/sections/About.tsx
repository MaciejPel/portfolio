import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { en, pl } from "../../utils/translation";
import ToNext from "../ToNext";
import avatar from "../../../public/images/avatar.jpg";
import triangle from "../../../public/images/triangle.svg";
import sigma from "../../../public/images/sigma.svg";
import circle from "../../../public/images/circle.svg";
import square from "../../../public/images/square.svg";
import integral from "../../../public/images/integral.svg";

interface AboutProps {
	active: string;
	setRef?: (e: HTMLElement) => HTMLElement;
}

const symbols = [
	{
		img: sigma,
		css: "w-24 h-24 xl:lg:left-[4%] left-[2%] top-[120%] -rotate-45",
	},
	{
		img: triangle,
		css: "w-40 h-40 left-[20%] xl:top-[143%] top-[140%] rotate-12",
	},
	{ img: circle, css: "w-40 h-40 left-[70%] xl:top-[143%] top-[140%]" },
	{
		img: square,
		css: "w-40 h-40 left-[45%] xl:top-[148%] top-[140%] rotate-[250deg]",
	},
	{
		img: integral,
		css: `w-20 h-20 left-[90%] top-[120%] rotate-12`,
	},
];

const About: React.FC<AboutProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === "en" ? en : pl;
	const { ref, inView } = useInView({ threshold: 0.4 });

	return (
		<section id="about" ref={setRef} className="min-h-[80%]">
			{symbols.map((symbol, index) => (
				<div
					key={index}
					className={`absolute -z-3 lg:block hidden -z-3 ${symbol.css}`}
				>
					<Image src={symbol.img} alt="symbol" />
				</div>
			))}
			<div className="container mx-auto lg:py-24 lg:px-24 flex relative z-10">
				<div className=" flex lg:flex-row justify-center items-center w-full flex-col rounded-xl p-4 lg:gap-10 gap-4">
					<div
						ref={ref}
						className={`col-span-2 flex lg:justify-end justify-center lg:transition-all lg:duration-[800ms] ${
							inView
								? "lg:animate-fadeInLeft"
								: "lg:-translate-x-[20%] lg:opacity-0"
						}`}
					>
						<Image
							src={avatar}
							alt="avatar"
							className="rounded-full"
							placeholder="blur"
						/>
					</div>
					<div
						className={`col-span-4 flex flex-col justify-center gap-1 lg:transition-all lg:duration-[800ms] 
							${inView ? "lg:animate-fadeInRight" : "lg:translate-x-[20%] lg:opacity-0"}`}
					>
						<div className="md:text-5xl text-3xl font-bold text-center lg:text-left">
							{t.sections.about.title}
						</div>
						<p className="font-normal text-center lg:text-left sm:text-base text-sm max-w-2xl">
							{t.sections.about.description}
						</p>
					</div>
				</div>
			</div>
			<div className="md:flex hidden justify-center 2xl:pt-32 2xl:pb-16 lg:pt-20 lg:pb-0">
				<ToNext active={active} />
			</div>
		</section>
	);
};

export default About;
