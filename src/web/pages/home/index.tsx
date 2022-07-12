import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "web/components/button";
import { Header } from "web/components/header";

import { AdvantagesContainer } from "./advantages-container";

export const Home: NextPage = () => {
	const router = useRouter();
	const onAboutUsButtonClick = () => {
		router.push("#advantages");
	};

	return (
		<>
			<Header />
			<main className="flex flex-col gap-20 mt-20">
				<section
					id="about-us"
					className="flex gap-8 flex-col justify-center items-center"
				>
					<div className="flex gap-3 flex-col justify-center items-center">
						<h2 className="font-bold font-heading text-2xl">
							Você pensou. A gente faz.
						</h2>
						<p className="max-w-lg text-center">
							A Molotov&rsquo;s Shop é uma loja que tem pessoas aptas a criar
							desde traduções de textos até bots para Discord, websites e
							designs para redes sociais.
						</p>
					</div>
					<Button type="primary" onClick={onAboutUsButtonClick}>
						Saiba mais
					</Button>
				</section>
				<section
					id="advantages"
					className="flex flex-col justify-center items-center gap-6 mb-10 mx-10"
				>
					<h1 className="font-bold font-heading text-2xl">Vantagens</h1>
					<AdvantagesContainer />
				</section>
			</main>
		</>
	);
};
