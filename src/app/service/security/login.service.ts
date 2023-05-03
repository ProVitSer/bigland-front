import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BaseApiResponseStruct } from 'app/models/base/base-api-response';
import { LoginData, Jwt } from 'app/models/security';
import { environment } from 'environments/environment';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	public storageService: StorageService;
	private readonly URL_LOGIN: string;

	constructor(private http: HttpClient, private router: Router) {
		this.storageService = new StorageService();
		this.URL_LOGIN = environment.URL_API + 'auth/login';
	}

	login(loginData: LoginData): Observable<Jwt> {
		const result = this.http.post<BaseApiResponseStruct<Jwt>>(this.URL_LOGIN, loginData).pipe(
			map((user) => {
				this.storageService.setCurrentUser(JSON.stringify(user.data));
				return user.data;
			}),
		);
		return result;
	}

	logout(): void {
		localStorage.clear();
		this.router.navigate(['/login']).then(() => {
			return;
		});
	}
}
