import type { FunctionComponent, ReactElement } from "react";

interface CardProps {
	icon: ReactElement;
	title: string;
	description: string;
}

export const Card: FunctionComponent<CardProps> = ({
	icon,
	title,
	description,
}: CardProps) => {
	return (
		<div className="flex flex-col gap-4 rounded-lg shadow-xl w-fit px-6 py-2 pb-5 justify-center items-center max-w-xs transition-all hover:-translate-y-1 md:max-w-sm">
			<div className="flex flex-col gap-2 justify-center items-center">
				{icon}
				<h1 className="font-bold font-heading text-xl">{title}</h1>
			</div>

			<p className="flex justify-center text-base text-center items-center">
				{description}
			</p>
		</div>
	);
};
