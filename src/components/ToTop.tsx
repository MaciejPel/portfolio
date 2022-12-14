import useScroll from '../hooks/useScroll';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const ToTop: React.FC = () => {
	const { scrollY } = useScroll();

	return (
		<div
			className={`fixed z-50 md:bottom-4 bottom-6 right-4 ${scrollY > 300 ? 'block' : 'hidden'}`}
		>
			<button
				title="Navigate to top"
				type="button"
				className="rounded-full bg-zinc-300 dark:bg-zinc-600 h-12 w-12 flex justify-center items-center mobileHover:hover:bg-amber-400 dark:mobileHover:hover:bg-blue-600 cursor-pointer animate-fadeInFast"
				onClick={() => window.scrollTo(0, 0)}
			>
				<ChevronUpIcon className="w-6" />
			</button>
		</div>
	);
};

export default ToTop;
