import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MyMaterialModule} from "./my-material-module/my-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginDialogModule} from "./login-dialog/login-dialog.module";
import {FirebaseService} from "./services/firebase.service";
import { EqualValidator } from './directives/equal-validator.directive';

export const firebaseConfig = {
  apiKey: "AIzaSyAPl20yIB9bsm0lMbXdpPmwOfKaes32CHY",
  authDomain: "mcocteammanager.firebaseapp.com",
  databaseURL: "https://mcocteammanager.firebaseio.com",
  projectId: "mcocteammanager",
  storageBucket: "mcocteammanager.appspot.com",
  messagingSenderId: "503718597267"
};


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    LoginDialogModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
