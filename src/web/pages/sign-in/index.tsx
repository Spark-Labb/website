import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { AuthorizationData } from "types/authorization-data";
import type { SummarizedDiscordUser } from "types/discord-user";

interface SignInPageProps {
	authorizationData: AuthorizationData;
	userData: SummarizedDiscordUser;
}

export const SignIn: NextPage<SignInPageProps> = ({
	authorizationData,
	userData,
}: SignInPageProps) => {
	const router = useRouter();

	useEffect(() => {
		const parsedAuthorizationData = JSON.stringify(authorizationData);
		localStorage.setItem("authorization", parsedAuthorizationData);

		const parsedUserData = JSON.stringify(userData);
		localStorage.setItem("user", parsedUserData);

		router.push("/");
	});

	return <div></div>;
};
