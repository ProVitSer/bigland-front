import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'pages/login',
		pathMatch: 'full',
	},
	{
		path: '',
		// canActivate: [AuthGuard],
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./layouts/admin-layout/admin-layout.module').then((m) => m.AdminLayoutModule),
			},
		],
	},
	{
		path: '',
		children: [
			{
				path: 'pages',
				loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
			},
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: true,
		}),
	],
	exports: [],
})
export class AppRoutingModule {}
