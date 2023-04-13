import { NgModule} from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTreeModule } from '@angular/material/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


@NgModule({
  exports: [
    DragDropModule,
    MatTreeModule,
    CdkTableModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule
    };
  }
}
