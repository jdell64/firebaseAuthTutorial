import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {LoginDialogComponent} from "./login-dialog.component";
import {Observable} from "rxjs";

@Injectable()
export class LoginDialogService {

  constructor(private dialog: MdDialog) { }

  public openLoginDialogue(): Observable<boolean> {

    let dialogRef: MdDialogRef<LoginDialogComponent>;

    dialogRef = this.dialog.open(LoginDialogComponent);
    // dialogRef.componentInstance.title = title;
    // dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
