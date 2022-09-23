import Header from './Header';
import Meta from './Meta';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<Header />
			<main className="main flex flex-col justify-start py-2 font-medium mx-auto max-w-5xl">
				{children}
			</main>
		</>
	);
};

export default Layout;
