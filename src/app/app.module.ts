import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from './material/material.module';
import { LoginPageComponent } from './components/security/login-page/login-page.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

@NgModule({
	declarations: [AppComponent, LoginPageComponent, DashboardComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		SharedModule,
		SweetAlert2Module.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
