import {Component, OnInit, Inject} from '@angular/core';
import {LoginDialogService} from "../login-dialog/login-dialog.service";
import {AngularFire, FirebaseAuthState, FirebaseApp} from 'angularfire2';
import {MdSnackBar} from '@angular/material'

@Component({
  selector: 'mtm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // result: any;
  currentUser: FirebaseAuthState;
  fbApp: any;


  constructor(public af: AngularFire, @Inject(FirebaseApp) fbApp: any, private loginDialogService: LoginDialogService, public snackBar: MdSnackBar) {


    this.af.auth.subscribe((user: FirebaseAuthState) => {
      this.currentUser = user;
      // console.log(user)
      if (user) { // User is signed in!
        /*this.profilePicStyles = {
         'background-image':  `url(${this.currentUser.auth.photoURL})`
         };

         // We load currently existing chat messages.
         this.messages = this.af.database.list('/messages', {
         query: {
         limitToLast: 12
         }
         });
         this.messages.subscribe((messages) => {
         // Calculate list of recently discussed topics
         const topicsMap = {};
         const topics = [];
         let hasEntities = false;
         messages.forEach((message) => {
         if (message.entities) {
         for (let entity of message.entities) {
         if (!topicsMap.hasOwnProperty(entity.name)) {
         topicsMap[entity.name] = 0
         }
         topicsMap[entity.name] += entity.salience;
         hasEntities = true;
         }
         }
         });
         if (hasEntities) {
         for (let name in topicsMap) {
         topics.push({ name, score: topicsMap[name] });
         }
         topics.sort((a, b) => b.score - a.score);
         this.topics = topics.map((topic) => topic.name).join(', ');
         }

         // Make sure new message scroll into view
         setTimeout(() => {
         const messageList = document.getElementById('messages');
         messageList.scrollTop = messageList.scrollHeight;
         document.getElementById('message').focus();
         }, 500);
         });

         */
        // We save the Firebase Messaging Device token and enable notifications.
        this.saveMessagingDeviceToken();
      } else { // User is signed out!
        /*
         this.profilePicStyles = {
         'background-image':  PROFILE_PLACEHOLDER_IMAGE_URL
         };
         this.topics = '';
         */
      }
    });
  }


  ngOnInit() {
  }

  public openDialog() {
    this.loginDialogService
      .openLoginDialogue()
      // .subscribe(res => console.log("res:", res));
    // .subscribe(res => console.log("res:", res));
    // .subscribe(res => this.result = res; );
  }


  // Saves the messaging device token to the datastore.
  saveMessagingDeviceToken() {
    //TODO: NOT IMPLEMENTED
    /*return this.fbApp.messaging().getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log('Got FCM device token:', currentToken);
          // Save the Device Token to the datastore.
          this.fbApp.database()
            .ref('/fcmTokens')
            .child(currentToken)
            .set(this.currentUser.uid);
        } else {
          // Need to request permissions to show notifications.
          console.error('not implemented requestNotifationsPermissions()');
          // return this.requestNotificationsPermissions();
        }
      }).catch((err) => {
        this.snackBar.open('Unable to get messaging token.', null, {
          duration: 5000
        });
        console.error(err);
      });*/
  };
// Requests permissions to show notifications.
 /* requestNotificationsPermissions() {
    console.log('Requesting notifications permission...');
    return this.fbApp.messaging().requestPermission()
    // Notification permission granted.
      .then(() => this.saveMessagingDeviceToken())
      .catch((err) => {
        this.snackBar.open('Unable to get permission to notify.', null, {
          duration: 5000
        });
        console.error(err);
      });
  };*/


  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
