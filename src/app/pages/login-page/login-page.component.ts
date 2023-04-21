import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
	user = { login: '', password: '' };
	constructor(private readonly alertService: AlertService) {}

	onSubmit(f: NgForm) {
		if (this.user.login && this.user.password) {
			//this.apiService.requestRx(this.user)
		} else {
			this.alertService.notifyDangerMessage('Введите имя пользователя и пароль');
		}
	}
}
