import Header from './Header';
import Meta from './Meta';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<Header />
			<main className="main flex flex-col justify-start py-2 font-medium mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
				{children}
			</main>
		</>
	);
};

export default Layout;
