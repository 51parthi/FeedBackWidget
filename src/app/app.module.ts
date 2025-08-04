import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboradComponent } from './admindashborad/admindashborad.component';
import { UserdashComponent } from './userdash/userdash.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  AdmindashboradComponent,
  UserdashComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
