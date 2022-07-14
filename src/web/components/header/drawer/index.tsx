import {
	Avatar,
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
import Link from "next/link";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";

import { HeaderDrawerLink } from "./link";

import type { SummarizedDiscordUser } from "types/discord-user";

interface HeaderDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	onModalOpen: () => void;
	userData: SummarizedDiscordUser;
}

export const HeaderDrawer: FunctionComponent<HeaderDrawerProps> = ({
	isOpen,
	onClose,
	onModalOpen,
	userData,
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
	];
	const router = useRouter();
	const { name: discordUserName, avatarURL } = userData;
	const isLoggedIn = Boolean(Object.keys(userData).length);

	const onLoginButtonClick = () => {
		onClose();
		onModalOpen();
	};

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
					<button className="flex gap-2" onClick={onLoginButtonClick}>
						<LoginIcon className="icon" />
						Login
					</button>
					{isLoggedIn ? ( // eslint-disable-line
						<div className="border-t border-gray-300 pt-2 flex gap-2 font-sans items-center">
							<Avatar name={discordUserName} src={avatarURL} size="sm" />
							<div>
								<h3>{discordUserName}</h3>
								<Link href="/dashboard" passHref>
									<a className="text-red-500">Ir para a dashboard</a>
								</Link>
							</div>
						</div>
					) : null}
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
