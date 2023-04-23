export interface Jwt {
	id: number;
	username: string;
	roles: string[];
	access_token: string;
	expires_in: number;
	refresh_token: string;
}

export class StorageService {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	public setCurrentUser(data: string): void {
		localStorage.setItem('current_user', data);
	}
}
