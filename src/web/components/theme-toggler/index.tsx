import { LightBulbIcon, MoonIcon } from "@heroicons/react/outline";
import { useOnScroll } from "hooks/use-on-scroll";
import { useTheme } from "hooks/use-theme";
import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";

export const ThemeToggler: FunctionComponent = () => {
	const [theme, setTheme] = useTheme();

	const scrollYPageContent = 90;
	const [isScrollAboveHeader, setIsScrollAboveHeader] = useState(false);

	useEffect(() => {
		setIsScrollAboveHeader(window.scrollY > scrollYPageContent);
	}, [setIsScrollAboveHeader]);

	useOnScroll(_event => {
		setIsScrollAboveHeader(window.scrollY > scrollYPageContent);
	});

	const onChangeThemeButtonClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			onClick={onChangeThemeButtonClick}
			className={`fixed bottom-5 right-5 w-16 h-16 bg-red-500 flex items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-[0_0_.5rem_#EF233C] ${
				isScrollAboveHeader ? "disappearing" : "appearing"
			}`}
			onScroll={() => {
				console.log("hi"); // eslint-disable-line
			}}
		>
			{theme === "light" ? ( // eslint-disable-line
				<LightBulbIcon className="w-10 h-10 stroke-1 stroke-white" />
			) : (
				<MoonIcon className="w-10 h-10 stroke-1 stroke-white" />
			)}
		</button>
	);
};
