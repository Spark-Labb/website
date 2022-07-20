import { Avatar, Tooltip, useDisclosure } from "@chakra-ui/react";
import { LoginIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";

import { Button } from "../button";

import { HeaderDrawer } from "./drawer";
import { HeaderDrawerPrivacyWarningModal } from "./drawer/privacy-warning-modal";

export const Header: FunctionComponent = () => {
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure();
	const {
		isOpen: isModalOpen,
		onOpen: onModalOpen,
		onClose: onModalClose,
	} = useDisclosure();
	const [userData, setUserData] = useState(JSON.parse("{}"));

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user") as string));
	}, [setUserData]);

	const isLoggedIn = Boolean(Object.keys(userData).length);

	return (
		<header className="flex justify-between items-center h-[7rem] mx-10 md:mx-20">
			<div>
				<h1 className="font-bold font-heading text-xl md:text-2xl">
					Molotov&rsquo;s Shop
				</h1>
			</div>
			<nav className="hidden md:flex md:gap-10">
				<Link href="#about-us" passHref>
					<a className="border-b border-b-transparent hover:border-b-red-500 transition-all relative top-1">
						Saiba mais
					</a>
				</Link>
				<Link href="#prices" passHref>
					<a className="border-b border-b-transparent hover:border-b-red-500 transition-all relative top-1">
						Preços
					</a>
				</Link>
			</nav>
			{isLoggedIn ? ( // eslint-disable-line
				<Link href="/dashboard" passHref>
					<a className="hidden md:flex">
						<Tooltip
							label={userData.name}
							aria-label={`${userData.name}'s avatar`}
							className="-translate-y-1"
							hasArrow
						>
							<Avatar
								name={userData.name}
								src={userData.avatarURL}
								className="cursor-pointer transition-transform hover:-translate-y-1 hidden"
							/>
						</Tooltip>
					</a>
				</Link>
			) : (
				<Button
					type="primary"
					className="hidden font-medium md:flex md:items-center md:gap-1"
					onClick={onModalOpen}
				>
					<LoginIcon className="icon" />
					Login
				</Button>
			)}
			<button className="flex md:hidden" onClick={onDrawerOpen}>
				<MenuIcon className="w-5 h-5 dark:stroke-white" />
			</button>

			<HeaderDrawer
				isOpen={isDrawerOpen}
				onClose={onDrawerClose}
				onModalOpen={onModalOpen}
				userData={userData}
			/>
			<HeaderDrawerPrivacyWarningModal
				isOpen={isModalOpen}
				onClose={onModalClose}
				onOpen={onModalOpen}
			/>
		</header>
	);
};
