import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import useScroll from '../hooks/useScroll';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';
import MileSteps from '../components/sections/MileSteps';
import Contact from '../components/sections/Contact';

interface IndexProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Index: NextPage<IndexProps> = ({ active, setActive }) => {
	const { scrollY } = useScroll();

	const sectionRefs = useRef<HTMLElement[] | null[]>([]);

	useEffect(() => {
		let lowestDiff: [string, number] = ['home', 10000];
		sectionRefs.current.forEach((item) => {
			if (item && Math.abs(item.offsetTop - scrollY) < lowestDiff[1]) {
				lowestDiff = [item.id, Math.abs(item.offsetTop + 250 - window.scrollY)];
			}
		});
		setActive(lowestDiff[0]);
	}, [scrollY, setActive]);

	return (
		<>
			<Home
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[0] = el)}
			/>
			<About
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[1] = el)}
			/>
			<Technologies
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[2] = el)}
			/>
			<Projects
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[3] = el)}
			/>
			<MileSteps
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[4] = el)}
			/>
			<Contact
				active={active}
				setRef={(el: HTMLElement) => (sectionRefs.current[5] = el)}
			/>
		</>
	);
};

export default Index;
