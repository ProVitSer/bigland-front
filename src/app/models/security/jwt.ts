export interface Jwt {
	user: {
		email: string;
		username: string;
	};
	roles?: string[];
	access_token: string;
	expires_in?: number;
	refresh_token?: string;
}
