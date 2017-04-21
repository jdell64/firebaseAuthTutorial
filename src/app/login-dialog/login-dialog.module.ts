import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from "./login-dialog.component";
import {LoginDialogService} from "./login-dialog.service";
import {MyMaterialModule} from "../my-material-module/my-material.module";
import {FormsModule} from "@angular/forms";
import {EqualValidator} from "../directives/equal-validator.directive";
// import {MaterialModule} from "@angular/material";

@NgModule({

  imports: [
    CommonModule,
    MyMaterialModule,
    FormsModule,
  ],
  exports: [
    LoginDialogComponent,
  ],
  declarations: [
    LoginDialogComponent,
    EqualValidator
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
