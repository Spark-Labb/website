import { useDisclosure } from "@chakra-ui/react";
import { LoginIcon, MenuIcon } from "@heroicons/react/solid";
import type { FunctionComponent } from "react";
import { useRef } from "react";

import { Button } from "../button";

import { HeaderDrawer } from "./drawer";

export const Header: FunctionComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const openButtonRef = useRef<HTMLButtonElement>(null);

	return (
		<header className="flex justify-between items-center h-[7rem] mx-10 md:mx-20">
			<div>
				<h1 className="font-bold font-heading text-xl md:text-2xl">
					Molotov&rsquo;s Shop
				</h1>
			</div>
			<nav className="hidden md:flex md:gap-10">
				<Button type="link" onClick={() => {}}>
					<a href="#about-us">Saiba mais</a>
				</Button>
				<Button type="link" onClick={() => {}}>
					<a href="#prices">Preços</a>
				</Button>
			</nav>
			<Button
				type="primary"
				className="hidden font-medium md:flex md:items-center md:gap-1"
				onClick={() => {}}
			>
				<LoginIcon className="icon" />
				Login
			</Button>
			<button ref={openButtonRef} className="flex md:hidden" onClick={onOpen}>
				<MenuIcon className="w-5 h-5" />
			</button>

			<HeaderDrawer isOpen={isOpen} onClose={onClose} />
		</header>
	);
};
