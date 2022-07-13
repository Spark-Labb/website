import { Avatar, Tooltip, useDisclosure } from "@chakra-ui/react";
import { LoginIcon, MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";

import { Button } from "../button";

import { HeaderDrawer } from "./drawer";

export const Header: FunctionComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userData, setUserData] = useState(JSON.parse("{}"));
	const router = useRouter();

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user") as string));
	}, [setUserData]);

	const isLoggedIn = Boolean(Object.keys(userData).length);
	const onLoginButtonClick = () => {
		router.push(process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URL as string);
	};

	return (
		<header className="flex justify-between items-center h-[7rem] mx-10 md:mx-20">
			<div>
				<h1 className="font-bold font-heading text-xl md:text-2xl">
					Molotov&rsquo;s Shop
				</h1>
			</div>
			<nav className="hidden md:flex md:gap-10">
				<Button type="link" onClick={() => {}} className="translate-y-1">
					<a href="#about-us">Saiba mais</a>
				</Button>
				<Button type="link" onClick={() => {}} className="translate-y-1">
					<a href="#prices">Preços</a>
				</Button>
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
					onClick={onLoginButtonClick}
				>
					<LoginIcon className="icon" />
					Login
				</Button>
			)}
			<button className="flex md:hidden" onClick={onOpen}>
				<MenuIcon className="w-5 h-5" />
			</button>

			<HeaderDrawer isOpen={isOpen} onClose={onClose} userData={userData} />
		</header>
	);
};
