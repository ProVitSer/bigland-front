import { Injectable } from '@angular/core';
import { Jwt } from 'app/models/security';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public storageService: StorageService;
	private jwtHelper: JwtHelperService = new JwtHelperService();
	constructor() {
		this.storageService = new StorageService();
	}

	public storeTokens(tokens: Jwt):void {
		for (const key in tokens) {
			this.storageService.saveData(`${key}`, tokens[key]);
		}
	}

	public clearTokensData(): void {
		this.storageService.removeData('accessToken');
		this.storageService.removeData('refreshToken');
	}

	public loggedIn(): boolean {
		try {
            return !this.jwtHelper.isTokenExpired(this.getTokenFromStorage('accessToken'));
		} catch (e) {
			return false;
		}
	}

	private getTokenFromStorage(token: keyof Jwt): string | null {
		const t: string = this.storageService.getData(token);
		if (t && t.length > 0) {
			return t;
		} else {
			return null;
		}
	}
}
