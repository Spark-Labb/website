import { LightBulbIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "hooks/use-theme";
import type { FunctionComponent } from "react";

export const ThemeToggler: FunctionComponent = () => {
	const [theme, setTheme] = useTheme();

	const onChangeThemeButtonClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			onClick={onChangeThemeButtonClick}
			className="fixed bottom-5 right-5 w-16 h-16 bg-red-500 flex items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-[0_0_.5rem_#EF233C]"
		>
			{theme === "light" ? ( // eslint-disable-line
				<LightBulbIcon className="w-10 h-10 stroke-1 stroke-white" />
			) : (
				<MoonIcon className="w-10 h-10 stroke-1 stroke-white" />
			)}
		</button>
	);
};
