/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { en, pl, languageOptions } from '../utils/translation';
import {
	LanguageIcon,
	ChevronDownIcon,
	SwatchIcon,
	SunIcon,
	MoonIcon,
} from '@heroicons/react/24/solid';

const themes = [
	{ name: 'light', icon: <SunIcon className="w-5" /> },
	{ name: 'dark', icon: <MoonIcon className="w-5" /> },
];

const navigation = [
	{ name: 'home', url: '/' },
	{ name: 'projects', url: '/projects' },
];

const Header: React.FC = () => {
	const { locale, locales, asPath } = useRouter();
	const t = locale === 'en' ? en : pl;
	const { theme: currentTheme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const [dropdown, setDropdown] = useState({ language: false, theme: false });

	// const handleResize = () => {
	// 	window.scrollY >= 90 ? setScrolled(true) : setScrolled(false);
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleResize);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleResize);
	// 	};
	// }, []);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<header
			className={`sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur  text-gray-500 dark:text-gray-400 bg-slate-100 dark:bg-slate-900 ${
				scrolled ? '' : ''
			}`}
		>
			<nav className="flex items-center p-2 min-h-[4rem] w-full ">
				<div className="flex flex-0 sm:gap-8 gap-2 max-w-7xl mx-auto w-full sm:justify-end justify-around items-center">
					{navigation.map((item, index) => (
						<Link
							href={item.url}
							key={index}
						>
							<a className=" hover:text-black dark:hover:text-white hover:underline transition-colors">
								{t.menu[item.name as keyof typeof t.menu]}
							</a>
						</Link>
					))}
					<div className="flex gap-1">
						<div className="relative inline-block">
							<div
								className="gap-1 hover:bg-slate-200 rounded inline-flex cursor-pointer select-none items-center justify-center hover:text-black h-8 px-2 transition-colors"
								tabIndex={0}
								// onClick={() =>
								// 	setDropdown({ ...dropdown, language: !dropdown.language, theme: false })
								// }
							>
								<LanguageIcon className="w-5" />
								<ChevronDownIcon className="w-3" />
							</div>
							{dropdown.language && (
								<div
									className="absolute mt-2 right-0 w-36 rounded-lg dark:bg-slate-800 bg-slate-100"
									tabIndex={0}
								>
									<ul className="flex flex-col gap-1 p-2">
										{locales?.map((l, i) => (
											<Link
												key={i}
												href={asPath}
												locale={l}
											>
												<li
													className={`rounded-lg py-2 px-4 font-medium cursor-pointer flex gap-2 dark:hover:bg-slate-700 hover:bg-slate-200 ${
														l === locale ? '!bg-green-400 text-white' : ''
													}`}
												>
													<img
														src={`https://flagcdn.com/192x144/${
															languageOptions[l as keyof typeof languageOptions]
														}.webp`}
														width="32"
														height="24"
														alt={l}
													/>
													{
														languageOptions.abbreviation[
															l as keyof typeof languageOptions.abbreviation
														]
													}
												</li>
											</Link>
										))}
									</ul>
								</div>
							)}
						</div>
						<div className="relative inline-block">
							<div
								className="gap-1 hover:bg-slate-200 rounded inline-flex cursor-pointer select-none items-center justify-center hover:text-black h-8 px-2 transition-colors"
								onClick={() =>
									setDropdown({ ...dropdown, theme: !dropdown.theme, language: false })
								}
							>
								<SwatchIcon className="w-5" />
								<ChevronDownIcon className="w-3" />
							</div>
							{dropdown.theme && (
								<div className="absolute mt-2 right-0 w-36 rounded-lg dark:bg-slate-800 bg-slate-100">
									<ul className="flex flex-col gap-1 p-2">
										{themes.map((theme, i) => (
											<li
												key={i}
												className={`rounded-lg py-2 px-4 cursor-pointer flex gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium ${
													theme.name === currentTheme ? '!bg-green-400 text-white' : ''
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
