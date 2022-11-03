import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './authService/auth.service'
import { environment } from 'src/environments/environment';

import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import {provideStorage, getStorage} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [{provide : APP_BASE_HREF , useValue : '/api'},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
