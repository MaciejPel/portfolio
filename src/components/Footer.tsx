import { useRouter } from "next/router";
import { en, pl } from "../utils/translation";

const Footer: React.FC = () => {
	const { locale } = useRouter();
	const t = locale === "en" ? en : pl;

	return (
		<footer id="footer" className="bg-zinc-50 dark:bg-zinc-900 h-16">
			<div className="container mx-auto md:px-20 w-full flex justify-center items-center h-full md:gap-1 flex-col md:flex-row">
				<div>
					&copy;&nbsp;
					<a
						href="https://github.com/MaciejPel"
						target="__blank"
						className="font-semibold mobileHover:hover:text-amber-500 dark:mobileHover:hover:text-blue-400 mobileHover:hover:underline"
					>
						Maciej Pełczyński
					</a>
				</div>
				<div>
					{new Date().getFullYear()}
					&nbsp;
					{t.copyright}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
