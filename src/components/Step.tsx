interface StepProps {
	id: number;
	year: string;
	title: string;
	description: string;
	inView: boolean;
}

const Step: React.FC<StepProps> = ({ id, year, title, description, inView }) => {
	// solves tailwind dynamic class issue
	const percentages: { [key: number]: string } = {
		1: 'lg:-translate-x-[100%] lg:delay-[100ms]',
		2: 'lg:-translate-x-[200%] lg:delay-[200ms]',
		3: 'lg:-translate-x-[300%] lg:delay-[300ms]',
		4: 'lg:-translate-x-[400%] lg:delay-[400ms]',
	};

	return (
		<div
			className={`lg:col-span-2 grid-rows-1 text-center dark:bg-zinc-800 bg-zinc-200 rounded-lg py-1 px-2 lg:duration-500 lg:transition-all ${
				inView ? `lg:-translate-x-0 lg:opacity-1` : `${percentages[id]} lg:opacity-0`
			}`}
		>
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
