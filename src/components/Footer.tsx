import { useRouter } from 'next/router';
import { en, pl } from '../utils/translation';

const Footer: React.FC = () => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;

	return (
		<footer
			id="footer"
			className="bg-zinc-50 dark:bg-zinc-700 h-12"
		>
			<div className="container mx-auto md:px-20 w-full flex md:justify-end justify-center items-center h-full gap-1">
				&copy;
				<a
					href="https://github.com/MaciejPel"
					target="__blank"
					className="font-semibold hover:text-amber-500 dark:hover:text-blue-400 hover:underline"
				>
					Maciej Pełczyński
				</a>
				{new Date().getFullYear()}
				&nbsp;
				{t.copyright}
			</div>
		</footer>
	);
};

export default Footer;
