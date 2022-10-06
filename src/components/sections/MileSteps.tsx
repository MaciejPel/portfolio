import { useRouter } from 'next/router';
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

	return (
		<section
			id="mile-steps"
			ref={setRef}
		>
			<div className="lg:text-5xl font-bold text-3xl mb-2 text-center">{t.menu['mile-steps']}</div>
			<div className="container mx-auto lg:px-8	px-16 lg:py-12 py-2">
				<div>
					<div className="grid lg:grid-cols-11 grid-rows-stepsLayout lg:grid-rows-none lg:gap-0 gap-2">
						<Step
							year={t.sections['mile-steps'].beginning.year}
							title={t.sections['mile-steps'].beginning.title}
							description={t.sections['mile-steps'].beginning.description}
						/>
						<div className="flex items-center lg:col-span-1 row-span-1 justify-center">
							<ChevronRightIcon className="w-8 lg:rotate-0 rotate-90" />
						</div>
						<Step
							year={t.sections['mile-steps'].birrt.year}
							title={t.sections['mile-steps'].birrt.title}
							description={t.sections['mile-steps'].birrt.description}
						/>
						<div className="flex items-center lg:col-span-1 row-span-1 justify-center">
							<ChevronRightIcon className="w-8 lg:rotate-0 rotate-90" />
						</div>
						<Step
							year={t.sections['mile-steps'].br.year}
							title={t.sections['mile-steps'].br.title}
							description={t.sections['mile-steps'].br.description}
						/>
						<div className="flex items-center lg:col-span-1 row-span-1 justify-center">
							<ChevronRightIcon className="w-8 lg:rotate-0 rotate-90" />
						</div>
						<Step
							year={t.sections['mile-steps'].solo.year}
							title={t.sections['mile-steps'].solo.title}
							description={t.sections['mile-steps'].solo.description}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center text-2xl font-medium py-8">
					<div>{t.sections['mile-steps'].all}</div>
					<div>{t.sections['mile-steps'].thanks}</div>
					🤗
				</div>
			</div>
		</section>
	);
};
export default MileSteps;
