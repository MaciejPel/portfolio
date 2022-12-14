import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;

