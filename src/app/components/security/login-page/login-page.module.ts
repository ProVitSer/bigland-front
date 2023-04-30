import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [CommonModule, ReactiveFormsModule, FormsModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
