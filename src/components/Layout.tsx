import Header from './Header';
import Meta from './Meta';
import ToTop from './ToTop';
import Footer from './Footer';
import React, { useState } from 'react';

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	const [active, setActive] = useState<string>('home');

	return (
		<>
			<Meta />
			<Header active={active} />
			<main className="bg-gradient-to-b dark:from-black dark:to-zinc-900 from-white to-zinc-100">
				{React.cloneElement(children, { active, setActive })}
			</main>
			<Footer />
			<ToTop />
		</>
	);
};

export default Layout;
