import { Routes } from '@angular/router';
import { AdmindashboradComponent } from './admindashborad/admindashborad.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
  { path: 'admindashboard', component: AdmindashboradComponent},
   {path:'userdash',component:UserdashComponent}
];

