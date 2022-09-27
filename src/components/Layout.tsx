import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import ToTop from './ToTop';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<Header />
			<main className="mt-28 pt-2 pb-14">{children}</main>
			<Footer />
			<ToTop />
		</>
	);
};

export default Layout;
