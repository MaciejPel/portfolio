import Header from './Header';
import Meta from './Meta';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<Header />
			<main className="flex flex-col justify-start py-2 mt-20 font-medium md:mx-auto md:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-8 w-full">
				{children}
			</main>
		</>
	);
};

export default Layout;
