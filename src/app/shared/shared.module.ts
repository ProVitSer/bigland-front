import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule,
		MatDialogModule,
		ReactiveFormsModule,
		FormsModule,
		MatAutocompleteModule,
	],
	exports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
