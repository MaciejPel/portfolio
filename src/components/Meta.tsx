import Head from 'next/head';

const Meta: React.FC<{ title?: string }> = ({ title = 'Home' }) => {
	const titleTag = `${title} | Maciej Pełczyński | Front-End Developer`;
	return (
		<Head>
			<title>{titleTag}</title>
			link
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="description"
				content="Personal portfolio"
			/>
			<meta
				name="keywords"
				content="Portfolio"
			/>
		</Head>
	);
};

export default Meta;
