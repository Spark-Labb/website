import type { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type: "link" | "primary" | "secondary";
	onClick: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
	children,
	type,
	onClick,
	className,
}: ButtonProps) => {
	let buttonStyle;

	if (type === "primary") {
		buttonStyle = // eslint-disable-line
			"px-7 py-2 text-white font-sans bg-red-500 rounded-lg hover:drop-shadow-md hover:-translate-y-[0.1rem]";
	} else if (type === "secondary") {
		buttonStyle =
			"px-7 py-2 text-red-500 font-sans bg-white border border-red-500 duration-200 rounded-lg hover:bg-red-500 hover:text-white";
	} else {
		buttonStyle =
			"text-black duration-200 translate-y-2 border-b-2 border-b-transparent hover:border-b-red-500";
	}

	return (
		<button
			className={`transition-all font-normal ${buttonStyle} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
