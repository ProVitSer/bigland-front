import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

import { NotificationService } from '../notifications/notification.service';
import { errorNotification } from '../../helpers/error-notification.helper';
import { environment } from 'environments/environment';

@Injectable()
export abstract class ApiService<T> {
	protected readonly URL: string;

	protected constructor(protected httpClient: HttpClient, protected notificationService: NotificationService) {
		this.URL = environment.URL_API + 'v2/';
	}

	abstract get fullUrl(): string;

	create(data: T, message?: string): Observable<T> {
		return this.httpClient.post<T>(this.fullUrl, data).pipe(
			catchError((error) => {
				return errorNotification(error.error, this.notificationService);
			}),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
			tap((value: any) => {
				this.notificationService.success(message ?? '');
			}),
		);
	}

	update(data: T, message?: string): Observable<T> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return this.httpClient.put<T>(this.fullUrl + (data as any).id, data).pipe(
			catchError((error) => {
				return errorNotification(error.error, this.notificationService);
			}),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
			tap((value: any) => {
				this.notificationService.success(message ?? '');
			}),
		);
	}

	show(id: number): Observable<T> {
		return this.httpClient.get<T>(this.fullUrl + id).pipe(
			catchError((error) => {
				return errorNotification(error.error, this.notificationService);
			}),
		);
	}

	delete(id: number, message?: string): Observable<T> {
		return this.httpClient.delete<T>(this.fullUrl + id).pipe(
			catchError((error) => {
				return errorNotification(error.error, this.notificationService);
			}),
			tap(() => {
				this.notificationService.success(message ?? '');
			}),
		);
	}
}
