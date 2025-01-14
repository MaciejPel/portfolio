import { useRouter } from "next/router";
import { en, pl } from "../../utils/translation";
import { technologies } from "../../utils/constants";
import Badge from "../Badge";
import ProjectCard from "../ProjectCard";
import ToNext from "../ToNext";
import project0 from "../../../public/images/project0.jpeg";
import project1 from "../../../public/images/project1.jpeg";
import project2 from "../../../public/images/project2.jpeg";
import project3 from "../../../public/images/project3.jpeg";

interface ProjectsProps {
	active: string;
	setRef?: (e: HTMLElement) => HTMLElement;
}

const Projects: React.FC<ProjectsProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === "en" ? en : pl;

	return (
		<section id="projects" ref={setRef}>
			<div className="container mx-auto flex flex-col lg:gap-12 gap-4 items-center lg:px-12 px-4 py-12 md:pb-0">
				<div className="text-center flex flex-col gap-2">
					<div className="md:text-5xl text-3xl font-bold">
						{t.menu.projects}
					</div>
					<div className="font-light ">{t.sections.projects.description}</div>
				</div>
				<div className="flex flex-col lg:gap-16 gap-6">
					<ProjectCard
						title="Spotter"
						description={t.sections.projects.spotterDescription}
						image={project0}
						url="https://spotterv1.onrender.com/"
						git="https://github.com/MaciejPel/spotterv1"
						badges={Object.values(technologies)
							.filter((item) => item.usage.includes("spotter"))
							.map((item, index) => (
								<Badge key={index} title={item.name} icon={item.img} />
							))}
					/>
					<ProjectCard
						title="StorageBox"
						description={t.sections.projects.storageBoxDescription}
						image={project1}
						url="https://storage-box-pub.vercel.app/"
						git="https://github.com/MaciejPel/storageBoxV1"
						badges={Object.values(technologies)
							.filter((item) => item.usage.includes("storagebox"))
							.map((item, index) => (
								<Badge key={index} title={item.name} icon={item.img} />
							))}
						reversed={true}
					/>
					<ProjectCard
						title="case value"
						description={t.sections.projects.caseValueDescription}
						image={project2}
						url="https://case-value.vercel.app"
						git="https://github.com/MaciejPel/case-value"
						badges={Object.values(technologies)
							.filter((item) => item.usage.includes("casevalue"))
							.map((item, index) => (
								<Badge key={index} title={item.name} icon={item.img} />
							))}
					/>
					<ProjectCard
						title="expenses tracker"
						description={t.sections.projects.caseValueDescription}
						image={project3}
						url="https://expenses-tracker-hjps.onrender.com"
						git="https://github.com/MaciejPel/expenses-tracker"
						badges={Object.values(technologies)
							.filter((item) => item.usage.includes("expensestracker"))
							.map((item, index) => (
								<Badge key={index} title={item.name} icon={item.img} />
							))}
						reversed={true}
					/>
				</div>
			</div>
			<div className="justify-center md:pt-12 md:pb-20 py-4 md:flex hidden">
				<ToNext active={active} />
			</div>
		</section>
	);
};

export default Projects;
