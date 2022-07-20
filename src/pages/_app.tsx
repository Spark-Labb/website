import "styles/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		if (!localStorage.getItem("user")) {
			localStorage.setItem("user", "{}");
		}

		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "light");
		}
	});

	return (
		<>
			<Head>
				<title>Molotov&rsquo;s Shop</title>
			</Head>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
};

export default MyApp;
