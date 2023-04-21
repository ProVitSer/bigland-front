import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [CommonModule, ReactiveFormsModule, FormsModule, LoginPageRoutingModule, CoreModule],
})
export class LoginPageModule {}
