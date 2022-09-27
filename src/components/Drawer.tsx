import { XMarkIcon } from '@heroicons/react/24/solid';

interface DrawerProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
	return (
		<div>
			<div
				className={`z-50 top-0 left-0 sm:w-1/2 w-4/6 h-screen bg-zinc-100 dark:bg-zinc-800 shadow-zinc-600 fixed transition-transform duration-500 pl-8 pr-4 pt-4 ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="flex justify-end mb-8">
					<div
						className="dark:hover:bg-blue-600 hover:bg-amber-400 rounded inline-flex cursor-pointer select-none h-8 px-2"
						onClick={() => onClose()}
					>
						<XMarkIcon className="w-8" />
					</div>
				</div>
				<div className="block text-[20px]">{children}</div>
			</div>
			<div
				className={`bg-black opacity-50 dark:opacity-25 z-40 h-screen left-0 top-0 w-full fixed cursor-pointer ${
					open ? '' : 'hidden'
				}`}
				onClick={() => onClose()}
			/>
		</div>
	);
};

export default Drawer;
