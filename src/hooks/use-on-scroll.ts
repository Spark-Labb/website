import { useEffect } from "react";

export const useOnScroll = (onScroll: (event: Event) => void) => {
	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});
};
