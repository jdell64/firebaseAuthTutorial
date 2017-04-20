import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from "./login-dialog.component";
import {LoginDialogService} from "./login-dialog.service";
import {MyMaterialModule} from "../app/my-material-module/my-material.module";
// import {MaterialModule} from "@angular/material";

@NgModule({

  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [
    LoginDialogComponent,
  ],
  declarations: [
    LoginDialogComponent,
  ],
  providers: [
    LoginDialogService,
  ],
  entryComponents: [
    LoginDialogComponent,
  ]
})
export class LoginDialogModule {

}
