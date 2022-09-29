import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const ToTop: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			window.scrollY > 300 ? setScrolled(true) : setScrolled(false);
		};
		window.addEventListener('scroll', handleResize);
		return () => {
			window.removeEventListener('scroll', handleResize);
		};
	}, []);

	return (
		<div className={`fixed md:bottom-4 bottom-6 right-4 ${scrolled ? 'block' : 'hidden'}`}>
			<button
				title="Navigate to top"
				type="button"
				className="rounded-full bg-zinc-200 dark:bg-zinc-600 h-12 w-12 flex justify-center items-center hover:bg-amber-400 dark:hover:bg-blue-600  cursor-pointer animate-fadeIn"
				onClick={() => window.scrollTo(0, 0)}
			>
				<ChevronUpIcon className="w-6" />
			</button>
		</div>
	);
};

export default ToTop;
