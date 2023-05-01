import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/security/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: '',
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				data: {
					title: 'Dashboard',
				},
			},
		],
	},
	{
		path: 'login',
		data: {
			title: 'Авторизоваться',
		},
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

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
