import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import useWindowSize from "../hooks/useWindowSize";
import useScroll from "../hooks/useScroll";
import { en, pl, languageOptions } from "../utils/translation";
import { navigation } from "../utils/constants";
import {
	LanguageIcon,
	SwatchIcon,
	SunIcon,
	MoonIcon,
	Bars3Icon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import Drawer from "./Drawer";
import Dropdown from "./Dropdown";
import Meta from "./Meta";

const themes = [
	{ name: "system", icon: <ComputerDesktopIcon className="w-5" /> },
	{ name: "light", icon: <SunIcon className="w-5" /> },
	{ name: "dark", icon: <MoonIcon className="w-5" /> },
];

const Header: React.FC<{ active: string }> = ({ active }) => {
	const { locale, locales, asPath } = useRouter();
	const t = locale === "en" ? en : pl;
	const { theme: currentTheme, setTheme } = useTheme();
	const { width } = useWindowSize();
	const { scrollY } = useScroll();

	const [mounted, setMounted] = useState(false);
	const [drawer, setDrawer] = useState(false);
	const [dropdown, setDropdown] = useState({ language: false, theme: false });

	const scrollTo = (id: string) => {
		const section = document.getElementById(`${id}`);
		if (!section) return;
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const navItems: JSX.Element[] = useMemo(
		() =>
			navigation.map((item, index) => (
				<a
					href={`#${item}`}
					key={index}
					className={`btn-active font-medium md:flex md:mb-0 mb-4 table select-none cursor-pointer ${
						item === active ? "active" : ""
					}`}
					onClick={(e) => {
						e.preventDefault();
						setDrawer(false);
						scrollTo(item);
					}}
				>
					{t.menu[item as keyof typeof t.menu].toUpperCase()}
				</a>
			)),
		[active, t]
	);

	// close dropdowns if user click outside of their area
	useEffect(() => {
		const closeSelector = (e: Event) => {
			const target = e.target as Element;
			if (!target.closest(".dropdown"))
				setDropdown({ language: false, theme: false });
		};
		window.addEventListener("click", closeSelector);
		return () => {
			window.removeEventListener("click", closeSelector);
		};
	}, [dropdown]);

	// close drawer if user went out of mobile screen
	useEffect(() => {
		if (width > 768) setDrawer(false);
	}, [width]);

	// prevent theme flickering
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<>
			<Meta
				title={
					t.menu[active as keyof typeof t.menu][0].toUpperCase() +
					t.menu[active as keyof typeof t.menu].slice(1)
				}
			/>
			<Drawer open={drawer} onClose={() => setDrawer(false)}>
				{navItems}
			</Drawer>
			<header
				className={`fixed top-0 z-20 flex w-full justify-center animate-slideInTop transition-header duration-100 ${
					scrollY > 50 ? "bg-zinc-50 dark:bg-zinc-800 shadow-md h-20" : "h-28"
				}`}
			>
				<nav className="flex items-center p-2 min-h-[4rem] w-full">
					<div className="sm:gap-6 gap-2 container md:px-8 mx-auto w-full sm:justify-end justify-between items-center flex">
						<div className="justify-end gap-8 md:flex hidden">{navItems}</div>
						<div className="md:hidden flex mx-auto w-full justify-start items-center">
							<div
								className="dark:hover:bg-blue-600 hover:bg-amber-400 rounded inline-flex cursor-pointer select-none h-8 px-2"
								onClick={() => setDrawer(!drawer)}
							>
								<Bars3Icon className="w-6" />
							</div>
						</div>
						<div className="flex gap-1">
							<Dropdown
								open={dropdown.language}
								onClick={() =>
									setDropdown({
										...dropdown,
										language: !dropdown.language,
										theme: false,
									})
								}
								icon={<LanguageIcon className="w-6" />}
							>
								{locales?.map((l, i) => (
									<Link key={i} href={asPath} locale={l}>
										<li
											className={`rounded-lg py-2 px-4 font-medium cursor-pointer flex gap-2 ${
												l === locale
													? "dark:bg-blue-600 bg-amber-400"
													: "dark:hover:bg-zinc-600 hover:bg-zinc-100"
											}`}
										>
											<Image
												src={
													languageOptions.flags[
														l as keyof typeof languageOptions.flags
													]
												}
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
							</Dropdown>
							<Dropdown
								open={dropdown.theme}
								onClick={() =>
									setDropdown({
										...dropdown,
										language: false,
										theme: !dropdown.theme,
									})
								}
								icon={<SwatchIcon className="w-6" />}
							>
								{themes.map((theme, i) => (
									<li
										key={i}
										className={`rounded-lg py-2 px-4 font-medium cursor-pointer flex gap-2 ${
											theme.name === currentTheme
												? "dark:bg-blue-600 bg-amber-400"
												: "dark:hover:bg-zinc-600 hover:bg-zinc-100"
										}`}
										onClick={() => setTheme(theme.name)}
									>
										{theme.icon}
										{t.themes[
											theme.name as keyof typeof t.themes
										][0].toUpperCase() +
											t.themes[theme.name as keyof typeof t.themes].slice(1)}
									</li>
								))}
							</Dropdown>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
