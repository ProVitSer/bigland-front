import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutes } from './pages.routing';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './security/login-page/login-page.component';

@NgModule({
	imports: [CommonModule, RouterModule.forChild(PagesRoutes), FormsModule, ReactiveFormsModule],
	declarations: [LoginPageComponent, NotFoundPageComponent],
})
export class PagesModule {}
