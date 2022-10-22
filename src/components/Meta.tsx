import Head from 'next/head';
import { useTheme } from 'next-themes';

const Meta: React.FC<{ title?: string }> = ({ title = 'Home' }) => {
	const titleTag = `${title} | Maciej Pełczyński | Front-End Developer`;
	const { theme } = useTheme();
	const favicon = (): string => {
		if (theme === 'system') return '/favicon-neutral.ico';
		if (theme === 'dark') return '/favicon-dark.ico';
		return '/favicon-light.ico';
	};

	return (
		<Head>
			<title>{titleTag}</title>
			<link
				rel="shortcut icon"
				href={favicon()}
			/>
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
