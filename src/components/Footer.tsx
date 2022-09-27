const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-zinc-800 dark:bg-zinc-700 text-white dark:text-white h-12"
		>
			<div className="container mx-auto px-4 flex justify-center items-center h-full">
				&copy; {new Date().getFullYear()} &nbsp;
				<a
					href="https://github.com/MaciejPel"
					target="__blank"
					className="font-semibold hover:text-amber-400 dark:hover:text-blue-400 transition-colors"
				>
					Maciej Pełczyński
				</a>
			</div>
		</footer>
	);
};

export default Footer;
