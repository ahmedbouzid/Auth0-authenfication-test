import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingInComponent } from './sing-in/sing-in.component';
import {MaterialModule} from './material.module'

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    SingInComponent ,
    DashboardComponent ,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MaterialModule ,
    FormsModule ,
// Import the module into the application, with configuration
AuthModule.forRoot({
  domain: 'dev-av3z3147l2o2lvpz.us.auth0.com',
  clientId: 'RjxnBnI05oBFzVeGAkAnlLKDEAbv2Ski',
  authorizationParams: {
    redirect_uri: window.location.origin
  }
})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
