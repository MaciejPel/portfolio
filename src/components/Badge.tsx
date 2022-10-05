import Image from 'next/image';
import { StaticImageData } from 'next/image';

const Badge: React.FC<{ title: string; icon: StaticImageData }> = ({ title, icon }) => {
	return (
		<div className="flex gap-2 dark:bg-zinc-800 px-3 py-1 rounded-3xl border-[1px] cursor-pointer dark:hover:bg-blue-600 hover:bg-amber-400 items-center transition-colors">
			<div className="w-5 h-5">
				<Image
					src={icon}
					alt={title}
				/>
			</div>
			{title}
		</div>
	);
};

export default Badge;
