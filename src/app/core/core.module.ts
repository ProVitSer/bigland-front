import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, SweetAlert2Module.forRoot()],
	exports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
})
export class CoreModule {}
