/* eslint-disable @typescript-eslint/naming-convention */

export interface DiscordUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	banner?: string;
	accent_color?: number;
	locale?: string;
	verified?: boolean;
	email?: string;
	flags?: number;
	premium_type?: number;
	public_flags?: number;
}

export interface SummarizedDiscordUser {
	id: string;
	name: string;
	avatarURL: string;
	email: string;
}
