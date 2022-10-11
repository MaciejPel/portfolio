import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { en, pl } from '../../utils/translation';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Step from '../Step';

interface MileStepsProps {
	active: string;
	setRef?: (e: HTMLElement) => HTMLElement;
}

const MileSteps: React.FC<MileStepsProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;
	const { ref, inView } = useInView({ threshold: 1 });

	const { beginning, birrt, br, solo } = t.sections['mile-steps'];
	const steps = [
		{
			id: 1,
			year: beginning.year,
			title: beginning.title,
			description: beginning.description,
		},
		null,
		{
			id: 2,
			year: birrt.year,
			title: birrt.title,
			description: birrt.description,
		},
		null,
		{
			id: 3,
			year: br.year,
			title: br.title,
			description: br.description,
		},
		null,
		{
			id: 4,
			year: solo.year,
			title: solo.title,
			description: solo.description,
		},
	];

	return (
		<section
			id="mile-steps"
			ref={setRef}
		>
			<div className="lg:text-5xl font-bold text-3xl mb-2 text-center pt-4">
				{t.menu['mile-steps']}
			</div>
			<div className="container mx-auto lg:px-8	px-16 lg:pt-12 py-2">
				<div>
					<div
						ref={ref}
						className="grid lg:grid-cols-11 grid-rows-stepsLayout lg:grid-rows-none lg:gap-0 gap-2"
					>
						{steps.map((step, index) => {
							return step ? (
								<Step
									key={index}
									id={step.id}
									year={step.year}
									title={step.title}
									description={step.description}
									inView={inView}
								/>
							) : (
								<div
									key={index}
									className={`flex items-center lg:col-span-1 row-span-1 justify-center lg:duration-[400ms] ${
										inView ? 'lg:opacity-100' : 'lg:opacity-0'
									}`}
								>
									<ChevronRightIcon className="w-8 lg:rotate-0 rotate-90" />
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col items-center text-2xl font-medium py-12">
					<div>{t.sections['mile-steps'].all}</div>
					<div>{t.sections['mile-steps'].thanks}</div>
					🤗
				</div>
			</div>
		</section>
	);
};
export default MileSteps;
