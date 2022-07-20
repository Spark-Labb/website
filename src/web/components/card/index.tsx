import type { FunctionComponent, ReactNode } from "react";

interface CardProps {
	children: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ children }: CardProps) => {
	return (
		<div className="flex flex-col gap-4 rounded-lg shadow-xl w-80 px-6 py-2 pb-5 justify-center items-center max-w-xs transition-all hover:-translate-y-1 md:max-w-sm">
			{children}
		</div>
	);
};
