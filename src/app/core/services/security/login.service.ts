import { Injectable } from '@angular/core';
import { Jwt, StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

interface LoginData {
	username: string;
	password: string;
}

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	private storageService: StorageService;
	private readonly URL_LOGIN: string;

	constructor(private http: HttpClient, private router: Router) {
		this.storageService = new StorageService();
		this.URL_LOGIN = environment.URL_API + 'auth/apiToken';
	}

	login(loginData: LoginData): Observable<Jwt> {
		return this.http.post<Jwt>(this.URL_LOGIN, loginData).pipe(
			map((user) => {
				this.storageService.setCurrentUser(JSON.stringify(user));
				return user;
			}),
		);
	}

	logout(): void {
		localStorage.clear();
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		this.router.navigate(['/login']).then(() => {});
	}
}
