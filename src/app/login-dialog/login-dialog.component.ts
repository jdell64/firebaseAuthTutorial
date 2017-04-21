import {OnInit, Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {trigger, transition, style, animate, state} from "@angular/animations";
import {FirebaseService} from "../services/firebase.service";
import {User} from "../user";

//TODO: animate hidden
@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['login-dialog.component.scss'],
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
    )
  ]
})

//TODO: Figure out staggered animations
export class LoginDialogComponent implements OnInit {
  public error: any;
  loginRequested: boolean = true;
  public user: User;

  //TODO: password matches validator

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  constructor(private firebaseService: FirebaseService,
              public dialogRef: MdDialogRef<LoginDialogComponent>) {
  }

  register(event, usr: User, isValid: boolean) {
    event.preventDefault();
    if (isValid) {
      this.firebaseService.registerUser(usr.email, usr.password).then((user) => {
        // this.firebaseService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.firebaseService.saveUserInfoFromForm(user.uid, usr.email).then(() => {
          // this.router.navigate(['']);
          this.dialogRef.close(true)
        }).catch((error) => { // error with saving user info
          this.error = error;
        });
      })
        .catch((error) => { // error with registration
          this.error = this.authErrorHandler(error);
          // console.error(this.error);
          setTimeout(() => {
            this.error = ""; // clear server error after
          }, 3000);
        });
    }
    // else?
  }

  emailLogin(event, usr: User, isValid: boolean) {
    // email, password
    event.preventDefault();
    if (isValid) {
      this.firebaseService.loginWithEmail(usr.email, usr.password).then((user) => {
        this.firebaseService.saveUserInfoFromForm(user.uid, usr.email).then(() => {
          // navigate?
          // console.log(this.dialogRef);
          this.dialogRef.close(true)
        }).catch((error) => { // error with saving user info
          this.error = error.message;
          console.error("error saving user info", error)
        });
      }).catch((error) => { // error with login
        this.error = this.authErrorHandler(error);
        // CLEAR server-side ERROR AFTER 3 SECONDS
        setTimeout(() => {
          this.error = ""; // clear server error after
        }, 3000); // 3 seconds
        // console.error("error with login:", error);
      });
    }
  }

  // TODO: make these global strings?
  // TODO: this could be in the service
  // TODO: return validator map so the client side can know which field the error has
  authErrorHandler(err): string {
    switch (err.code) {
      case "auth/argument-error":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid user or password.";
      case "auth/email-already-in-use":
        return "This email is already in use.";
      case "auth/invalid-email":
        return "The email address is formatted incorrectly.";
      case "auth/weak-password":
        return err.message;
      default:
        return err.message;
    }
  }

}
