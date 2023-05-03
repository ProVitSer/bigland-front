import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './security/login-page/login-page.component';

export const PagesRoutes: Routes = [
	{
		path: 'login',
		component: LoginPageComponent,
	},
	{
		path: '**',
		data: {
			title: 'Страница не найдена',
		},
		component: NotFoundPageComponent,
	},
];
