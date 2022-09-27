import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const ToTop = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			window.scrollY > 400 ? setScrolled(true) : setScrolled(false);
		};
		window.addEventListener('scroll', handleResize);
		return () => {
			window.removeEventListener('scroll', handleResize);
		};
	}, []);

	return (
		<div className={`fixed bottom-5 right-5 ${scrolled ? 'block' : 'hidden'}`}>
			<button
				title="Navigate to top"
				type="button"
				className="rounded-full bg-zinc-200 dark:bg-zinc-600 h-12 w-12 flex justify-center items-center hover:bg-amber-400 cursor-pointer animate-fadeIn"
				onClick={() => window.scrollTo(0, 0)}
			>
				<ChevronUpIcon className="w-6" />
			</button>
		</div>
	);
};

export default ToTop;
