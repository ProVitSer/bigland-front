import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { LoginService } from 'src/app/core/services/security/login.service';

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
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {
		//this.returnUrl = this.route.snapshot.queryParams['prevUrl'];
	}

	login(): void {
		if (this.loginForm.valid) {
			this.loading = true;
			this.loginService.login(this.loginForm.value).subscribe(
				() => {
					this.onLoginSuccess();
				},
				(error: any) => {
					this.onLoginFail(error);
				},
			);
		} else {
			this.notificationService.swalError('Поле Имя пользователя и пароль обязательны для заполнения');
		}
	}

	private onLoginSuccess(): void {
		this.loading = false;
		this.router.navigate(['/']).then(() => {
			this.notificationService.success('Сеанс успешно выполнен');
		});
	}

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
