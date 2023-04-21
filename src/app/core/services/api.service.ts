import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
	protected endpoint: string;
	constructor(private http: HttpClient, resourcePath: string) {
		this.endpoint = environment.apiURL + resourcePath;
	}

	requestRx(params: Params): Observable<any> {
		return this.http.post<any>(this.endpoint, params);
	}
}
