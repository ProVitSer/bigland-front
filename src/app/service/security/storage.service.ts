import { Jwt } from '@models/security';
import * as CryptoJS from 'crypto-js';

export class StorageService {
	private readonly SECRET_KEY = 'So78$hkas';
	private readonly ITEM_KEY = 'currentUser';

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	public encrypt(data: string): string {
		const encryptData = CryptoJS.AES.encrypt(data, this.SECRET_KEY).toString();
		return encryptData;
	}

	public decrypt(data: string): string {
		const decryptData = CryptoJS.AES.decrypt(data, this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
		return decryptData;
	}

	public getCurrentUser(): Jwt {
		const local = localStorage.getItem(this.ITEM_KEY);
		return local ? JSON.parse(this.decrypt(local)) : local;
	}

	public setCurrentUser(data: string): void {
		localStorage.setItem(this.ITEM_KEY, this.encrypt(data));
	}
}
