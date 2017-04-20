import {OnInit, Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {trigger, transition, style, animate, state} from "@angular/animations";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['login-dialog.component.css'],
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
  public error: any;
  loginRequested: boolean = true;
  email: string;

  //TODO: password matches validator

  ngOnInit() {
  }

  constructor(private firebaseService: FirebaseService,
              public dialogRef: MdDialogRef<LoginDialogComponent>) {
  }

  register(event, email, password) {
    event.preventDefault();
    this.firebaseService.registerUser(email, password).then((user) => {
      // this.firebaseService.saveUserInfoFromForm(user.uid, name, email).then(() => {
      this.firebaseService.saveUserInfoFromForm(user.uid, email).then(() => {
        // this.router.navigate(['']);
        this.dialogRef.close(true)
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.error(this.error);
      });
  }

  emailLogin(event, email, password) {
    event.preventDefault();
    this.firebaseService.loginWithEmail(email, password).then((user) => {
      this.firebaseService.saveUserInfoFromForm(user.uid, email).then(() => {
        // navigate?
        // console.log(this.dialogRef);
        this.dialogRef.close(true)
      })
        .catch((error) => {
          this.error = error.message;
        });
    })
      .catch((error) => {
        this.error = error.message;
        console.error(error);
      });

  }

}
