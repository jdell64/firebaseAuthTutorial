import {OnInit, Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {trigger, transition, style, animate, state} from "@angular/animations";

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({
            opacity: 0
          }),
          animate('400ms ease-out',
            style({
              opacity: 1
            })
          )
        ])
      ]
    )]
})

//TODO: Figure out staggered animations
export class LoginDialogComponent implements OnInit {

  loginRequested: boolean = true;

  ngOnInit() {

  }

  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>) {

  }

}
