import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BaseApiResponseStruct } from 'app/models/base/base-api-response';
import { LoginData, Jwt } from 'app/models/security';
import { environment } from 'environments/environment';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	private readonly URL_LOGIN: string;

	constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
		this.URL_LOGIN = environment.URL_API + 'auth/login';
	}

	login(loginData: LoginData): Observable<Jwt> {
		const result = this.http.post<BaseApiResponseStruct<Jwt>>(this.URL_LOGIN, loginData).pipe(
			map((res) => {
				this.auth.storeTokens(res.data);
				return res.data;
			}),
		);
		return result;
	}

	logout(): void {
		this.auth.clearTokensData();
		this.router.navigate(['/login']).then(() => {
			return;
		});
	}
}
