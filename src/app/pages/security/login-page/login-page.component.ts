import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'app/service/notifications/notification.service';
import { AuthService, LoginService } from 'app/service/security';

@Component({
	selector: 'app-login',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	returnUrl: string;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private notificationService: NotificationService,
		private loginService: LoginService,
		private auth: AuthService,
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	ngOnInit(): void {
		if(this.auth.loggedIn()){
			this.router.navigate(['/dashboard']);
		}
	}

	login(): void {
		if (this.loginForm.valid) {
			this.loading = true;
			this.loginService.login(this.loginForm.value).subscribe({
				next: () => this.onLoginSuccess(),
				error: (e: any) => this.onLoginFail(e),
			});
		} else {
			this.notificationService.swalError('Поле Имя пользователя и Пароль обязательны для заполнения');
		}
	}

	private onLoginSuccess(): void {
		this.loading = false;
		this.router.navigate(['/dashboard']).then(() => {
			this.notificationService.swalSuccess('Сеанс успешно выполнен');
		});
	}

	private onLoginFail(error: any): void {
		this.loading = false;
		if (error.status === undefined) {
			this.notificationService.swalError('Произошла ошибка');
		} else if (error.status !== 0) {
			this.notificationService.swalError(error.error.error);
		} else {
			this.notificationService.swalError('На данный момент нет подключения, попробуйте позже');
		}
	}
}
