import { Component, OnInit } from '@angular/core';
import {LoginDialogService} from "../../login-dialog/login-dialog.service";

@Component({
  selector: 'mtm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  result: any;
  constructor(private loginDialogService: LoginDialogService) { }

  ngOnInit() {
  }

  public openDialog() {
    this.loginDialogService
      .login()
      .subscribe(res => this.result = res);
  }

}
