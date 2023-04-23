import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	private readonly defaultTime: number;
	constructor(private matSnackBar: MatSnackBar) {
		this.defaultTime = 3500;
	}

	swalError(message: string, title = ''): void {
		Swal.fire({
			icon: 'error',
			title,
			text: message,
		});
	}

	swalSuccess(message: string, title = ''): void {
		Swal.fire({
			icon: 'success',
			title,
			text: message,
		});
	}

	swalWarning(message: string, title = ''): void {
		Swal.fire({
			icon: 'warning',
			title,
			text: message,
		});
	}

	success(message: string): void {
		this.matSnackBar.open(message, '', {
			duration: this.defaultTime,
			verticalPosition: 'top',
			horizontalPosition: 'right',
			panelClass: ['bg-success', 'text-white', 'fg-500'],
		});
	}

	error(message: string): void {
		this.matSnackBar.open(message, '', {
			duration: this.defaultTime,
			verticalPosition: 'top',
			horizontalPosition: 'right',
			panelClass: ['bg-danger', 'text-white', 'fg-500'],
		});
	}

	warning(message: string): void {
		this.matSnackBar.open(message, '', {
			duration: this.defaultTime,
			verticalPosition: 'top',
			horizontalPosition: 'right',
			panelClass: ['bg-warning-orange', 'text-white', 'fg-500'],
		});
	}
}
