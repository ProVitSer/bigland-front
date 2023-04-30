import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../service/notifications/notification.service';

export function errorNotification(error: any, notificationService: NotificationService): Observable<never> {
	let err: string;
	if (error instanceof ProgressEvent) {
		err = 'Не удалось установить соединение с сервером';
	} else if (error.status === 422) {
		err = error.errors[0].message;
	} else {
		err = error.message;
	}
	notificationService.error(err);
	return throwError(err);
}
