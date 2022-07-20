import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

export const useTheme = (
	defaultTheme?: string,
): [string, Dispatch<SetStateAction<string>>] => {
	const [theme, setTheme] = useState(defaultTheme || "light");

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(theme === "light" ? "dark" : "light");
		root.classList.add(theme);

		localStorage.setItem("theme", theme);
	}, [theme]);

	return [theme, setTheme];
};
