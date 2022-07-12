import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from "@chakra-ui/react";
import {
	BookOpenIcon,
	CurrencyDollarIcon,
	HomeIcon,
	LoginIcon,
	XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";

import { HeaderDrawerLink } from "./link";

interface HeaderDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

export const HeaderDrawer: FunctionComponent<HeaderDrawerProps> = ({
	isOpen,
	onClose,
}: HeaderDrawerProps) => {
	const navBarLinks = [
		{
			name: "Início",
			url: "/",
			icon: <HomeIcon className="icon" />,
		},
		{
			name: "Saiba mais",
			url: "#about-us",
			icon: <BookOpenIcon className="icon" />,
		},
		{
			name: "Preços",
			url: "#prices",
			icon: <CurrencyDollarIcon className="icon" />,
		},
		{
			name: "Login",
			url: "/sign-in",
			icon: <LoginIcon className="icon" />,
		},
	];
	const router = useRouter();

	return (
		<Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent className="rounded-lg duration-100">
				<DrawerHeader className="flex justify-between items-center">
					Veja alguns links úteis
					<button onClick={onClose}>
						<XIcon className="icon" />
					</button>
				</DrawerHeader>

				<DrawerBody className="flex flex-col gap-3">
					{navBarLinks.map(({ name, url, icon }) => (
						<HeaderDrawerLink
							key={name}
							URL={url}
							router={router}
							onClick={onClose}
						>
							{icon}
							{name}
						</HeaderDrawerLink>
					))}
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
