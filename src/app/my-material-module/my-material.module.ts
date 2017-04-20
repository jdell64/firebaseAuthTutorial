import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdMenuModule,
  MdToolbarModule, MdIconModule, MdDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule
  ],
  declarations: []
})
export class MyMaterialModule { }
