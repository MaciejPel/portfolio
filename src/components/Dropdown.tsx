import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/solid';

interface DropdownProps {
	open: boolean;
	onClick: () => void;
	icon: React.ReactNode;
	children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ open, onClick, icon, children }) => {
	return (
		<div className="dropdown relative inline-block">
			<div
				className={`gap-1 dark:hover:bg-blue-600 hover:bg-amber-400 rounded inline-flex cursor-pointer select-none items-center justify-center h-8 px-2 ${
					open ? 'dark:bg-blue-600 bg-amber-400' : ''
				}`}
				onClick={() => onClick()}
			>
				{icon}
				<ChevronDownIcon className="w-3" />
			</div>
			{open && (
				<div className="absolute mt-1 right-0 w-36 rounded-lg dark:bg-zinc-700 bg-zinc-200 shadow-md">
					<ul className="flex flex-col gap-1 p-2">{children}</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
