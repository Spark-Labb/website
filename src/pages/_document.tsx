import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	public render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Work+Sans:wght@600;700&display=swap"
						rel="stylesheet"
					/>
					<meta name="title" content="Molotov's Shop" />
					<meta
						name="description"
						content="A Molotov’s Shop é uma loja que tem pessoas aptas a criar desde traduções de textos até bots para Discord, websites e designs para redes sociais."
					/>
					<meta name="type" content="website" />
					<meta name="og:title" content="Molotov's Shop" />
					<meta
						name="og:description"
						content="A Molotov’s Shop é uma loja que tem pessoas aptas a criar desde traduções de textos até bots para Discord, websites e designs para redes sociais."
					/>
					<meta name="og:card" content="summary" />
					<meta name="og:type" content="websites" />
					<meta name="og:url" content="https://molotovs.shop" />
					<meta name="site_name" content="Molotov's Shop" />
					<meta name="apple-mobile-web-app-title" content="Molotov's Shop" />
					<meta name="theme-color" content="#EF233C" />
					<meta name="application-name" content="Molotov's Shop" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta
						name="keywords"
						content="discord, discord bots, create websites, molotov's shop, instagram designer, social media design, translations, portuguese to english, english to portuguese"
					/>
					<meta name="mobile-web-app-capable" content="yes" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
