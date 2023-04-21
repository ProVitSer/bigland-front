import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	notifyDangerMessage(message: string, title = ''): void {
		Swal.fire({
			icon: 'error',
			title,
			text: message,
		});
	}
}
