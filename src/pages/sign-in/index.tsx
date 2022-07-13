/* eslint-disable @typescript-eslint/naming-convention */

import type { AxiosResponse } from "axios";
import axios from "axios";
import type { GetServerSideProps } from "next";
import url from "url";
import { SignIn } from "web/pages/sign-in";

import type { AuthorizationRequestResponse } from "types/authorization-request-response";
import type { DiscordUser } from "types/discord-user";

export const getServerSideProps: GetServerSideProps = async context => {
	const { query } = context;
	const { code } = query;

	const requestData = new url.URLSearchParams({
		client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string,
		client_secret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET as string,
		redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI as string,
		grant_type: "authorization_code",
		code: code as string,
	});
	const { data: authorizationRequestResponse } = await axios.post<
		any,
		AxiosResponse<AuthorizationRequestResponse>
	>(
		`${process.env.NEXT_PUBLIC_BASE_DISCORD_API_URL}/oauth2/token`,
		requestData.toString(),
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		},
	);

	const { access_token, refresh_token, expires_in } =
		authorizationRequestResponse;

	const { data: userData } = await axios.get<any, AxiosResponse<DiscordUser>>(
		`${process.env.NEXT_PUBLIC_BASE_DISCORD_API_URL}/users/@me`,
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		},
	);

	const { id, username, avatar } = userData;

	return {
		props: {
			authorizationData: {
				accessToken: access_token,
				refreshToken: refresh_token,
				expiresIn: expires_in,
				requestedAt: Date.now(),
			},
			userData: {
				id,
				name: username,
				avatarURL: `https://cdn.discordapp.com/avatars/${id}/${avatar}`,
			},
		},
	};
};

export default SignIn;
