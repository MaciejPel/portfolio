import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

const ToNext: React.FC<{ active: string }> = ({ active }) => {
	return (
		<button
			title="Next section"
			type="button"
			className="dark:mobileHover:hover:bg-blue-600 mobileHover:hover:bg-amber-400 rounded-full h-12 w-12 flex items-center justify-center transition-colors group -translate-y-1 cursor-pointer"
			onClick={() => {
				const el = document.querySelectorAll(`#${active}`)[0].nextSibling as HTMLElement;
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		>
			<ChevronDoubleDownIcon className="w-8 translate-y-0 group-hover:translate-y-1 transition-transform" />
		</button>
	);
};
export default ToNext;
