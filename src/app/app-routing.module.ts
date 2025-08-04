import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboradComponent } from './admindashborad/admindashborad.component';
import { UserdashComponent } from './userdash/userdash.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'Admindashborad',component: AdmindashboradComponent},
  {path:'userdash',component: UserdashComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
