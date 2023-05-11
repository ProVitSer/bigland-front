import * as CryptoJS from 'crypto-js';
import { environment } from 'environments/environment';

export class StorageService {
	private readonly SECRET_KEY: string;

	constructor() {
		this.SECRET_KEY = environment.SECRET_KEY;
	}

	public encrypt(data: string): string {
		const encryptData = CryptoJS.AES.encrypt(data, this.SECRET_KEY).toString();
		return encryptData;
	}

	public decrypt(data: string): string {
		const decryptData = CryptoJS.AES.decrypt(data, this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
		return decryptData;
	}

	public saveData(key: string, value: string) {
		localStorage.setItem(key, this.encrypt(value));
	}

	public getData(key: string) {
		const data = localStorage.getItem(key) || '';
		return this.decrypt(data);
	}
	public removeData(key: string) {
		localStorage.removeItem(key);
	}
	public clearData() {
		localStorage.clear();
	}
}
