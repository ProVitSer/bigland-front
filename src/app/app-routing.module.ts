import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'login',
		loadChildren: () => import('./components/security/login-page/login-page.module').then((m) => m.LoginPageModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./components/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
