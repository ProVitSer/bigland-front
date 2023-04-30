import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notifications/notification.service';
import { LoginService } from 'src/app/service/security/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	loginForm: FormGroup;
	private loading = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private notificationService: NotificationService,
		private loginService: LoginService,
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
	ngOnInit(): void {}

	login(): void {
		if (this.loginForm.valid) {
			this.loading = true;
			this.loginService.login(this.loginForm.value).subscribe(
				() => {
					this.onLoginSuccess();
				},
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(error: any) => {
					this.onLoginFail(error);
				},
			);
		} else {
			this.notificationService.swalError('Поле Имя пользователя и Пароль обязательны для заполнения');
		}
	}

	private onLoginSuccess(): void {
		this.loading = false;
		this.router.navigate(['/']).then(() => {
			this.notificationService.success('Сеанс успешно выполнен');
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private onLoginFail(error: any): void {
		this.loading = false;
		if (error.status === undefined) {
			this.notificationService.error('Произошла ошибка');
		} else if (error.status !== 0) {
			this.notificationService.error(error.error.message);
		} else {
			this.notificationService.error('На данный момент нет подключения, попробуйте позже');
		}
	}
}
