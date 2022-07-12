import type { NextRouter } from "next/router";
import type { FunctionComponent, ReactNode } from "react";

interface HeaderDrawerLinkProps {
	children: ReactNode;
	URL: string;
	router: NextRouter;
	onClick: () => void;
}

export const HeaderDrawerLink: FunctionComponent<HeaderDrawerLinkProps> = ({
	children,
	URL,
	router,
	onClick,
}: HeaderDrawerLinkProps) => {
	const onLinkClick = () => {
		router.push(URL);
		onClick();
	};

	return (
		<button onClick={onLinkClick} className="max-w-fit">
			<div className="flex gap-2">{children}</div>
		</button>
	);
};
