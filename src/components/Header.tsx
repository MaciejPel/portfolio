import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { en, pl, languageOptions } from '../utils/translation';
import { navigation } from '../utils/constants';
import {
	LanguageIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	SwatchIcon,
	SunIcon,
	MoonIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

const themes = [
	{ name: 'light', icon: <SunIcon className="w-5" /> },
	{ name: 'dark', icon: <MoonIcon className="w-5" /> },
];

const Header: React.FC = () => {
	const { locale, locales, asPath } = useRouter();
	const t = locale === 'en' ? en : pl;
	const { theme: currentTheme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const [dropdown, setDropdown] = useState({ language: false, theme: false });

	// useEffect(() => {
	// const handleResize = () => {
	// 	window.scrollY >= 90 ? setScrolled(true) : setScrolled(false);
	// };
	// 	window.addEventListener('scroll', handleResize);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleResize);
	// 	};
	// }, []);

	useEffect(() => {
		const closeSelector = (e: Event) => {
			const target = e.target as Element;
			if (!target.closest('.dropdown')) setDropdown({ language: false, theme: false });
		};
		window.addEventListener('click', closeSelector);
		return () => {
			window.removeEventListener('click', closeSelector);
		};
	}, [dropdown]);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<header
			className={`sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur animate-slide ${
				scrolled ? '' : ''
			}`}
		>
			<nav className="flex items-center p-2 min-h-[4rem] w-full ">
				<div className="flex flex-0 sm:gap-6 gap-2 max-w-7xl mx-auto w-full sm:justify-end justify-around items-center">
					{navigation.map((item, index) => (
						<Link
							href={item.url}
							key={index}
						>
							<a
								className={`menu-item hover:text-black dark:hover:text-white transition-colors font-medium flex ${
									asPath === item.url ? 'active text-black dark:text-white' : ''
								}`}
							>
								{t.menu[item.name as keyof typeof t.menu].toUpperCase()}
							</a>
						</Link>
					))}
					<div className="flex gap-1">
						<div className="dropdown relative inline-block">
							<div
								className="gap-1 hover:bg-blue-600 hover:text-white rounded inline-flex cursor-pointer select-none items-center justify-center h-8 px-2 transition-colors"
								onClick={() =>
									setDropdown({ ...dropdown, language: !dropdown.language, theme: false })
								}
							>
								<LanguageIcon className="w-5" />
								<ChevronDownIcon className="w-3" />
							</div>
							{dropdown.language && (
								<div className="absolute mt-5 right-0 w-36 rounded-lg dark:bg-slate-700 bg-slate-200">
									<ul className="flex flex-col gap-1 p-2">
										{locales?.map((l, i) => (
											<Link
												key={i}
												href={asPath}
												locale={l}
											>
												<li
													className={`rounded-lg py-2 px-4 font-medium cursor-pointer flex gap-2 transition-colors dark:hover:bg-slate-600 hover:bg-slate-300 ${
														l === locale ? '!bg-blue-600 text-white' : ''
													}`}
												>
													<Image
														src={languageOptions.flags[l as keyof typeof languageOptions.flags]}
														width="32"
														height="24"
														alt={l}
													/>
													{
														languageOptions.abbreviations[
															l as keyof typeof languageOptions.abbreviations
														]
													}
												</li>
											</Link>
										))}
									</ul>
								</div>
							)}
						</div>
						<div className="dropdown relative inline-block">
							<div
								className="gap-1 hover:bg-blue-600 hover:text-white rounded inline-flex cursor-pointer select-none items-center justify-center h-8 px-2 transition-colors"
								onClick={() =>
									setDropdown({ ...dropdown, theme: !dropdown.theme, language: false })
								}
							>
								<SwatchIcon className="w-5" />
								<ChevronDownIcon className="w-3" />
							</div>
							{dropdown.theme && (
								<div className="absolute mt-5 right-0 w-36 rounded-lg dark:bg-slate-700 bg-slate-200">
									<ul className="flex flex-col gap-1 p-2">
										{themes.map((theme, i) => (
											<li
												key={i}
												className={`rounded-lg py-2 px-4 font-medium cursor-pointer flex gap-2 transition-colors dark:hover:bg-slate-600 hover:bg-slate-300 ${
													theme.name === currentTheme ? '!bg-blue-600 text-white' : ''
												}`}
												onClick={() => setTheme(theme.name)}
											>
												{theme.icon}
												{t.themes[theme.name as keyof typeof t.themes][0].toUpperCase() +
													t.themes[theme.name as keyof typeof t.themes].slice(1)}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
