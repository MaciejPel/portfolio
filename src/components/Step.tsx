interface StepProps {
	year?: string;
	title: string;
	description: string;
}

const Step: React.FC<StepProps> = ({ year, title, description }) => {
	return (
		<div className="lg:col-span-2 grid-rows-1 text-center dark:bg-zinc-800 bg-zinc-200 rounded-lg py-1 px-2">
			<div className="flex justify-between items-center">
				<div className="flex gap-2">
					<div className="bg-red-500 h-3 w-3 rounded-full" />
					<div className="bg-yellow-500 h-3 w-3 rounded-full" />
					<div className="bg-green-500 h-3 w-3 rounded-full" />
				</div>
				<div className="font-medium text-right">{year}</div>
			</div>
			<hr className="border-black dark:border-white" />
			<div className="p-2">
				<div className="font-medium text-left">{title}</div>
				<div className="text-left text-sm">{description}</div>
			</div>
		</div>
	);
};

export default Step;
