import { useState, useEffect } from 'react';

const useScroll = () => {
	const [scroll, setScroll] = useState<{
		scrollY: number;
	}>({
		scrollY: 0,
	});

	useEffect(() => {
		function handleScroll() {
			setScroll({
				scrollY: window.scrollY,
			});
		}

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scroll;
};

export default useScroll;

