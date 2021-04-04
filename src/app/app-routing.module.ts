import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbotusComponent } from './abotus/abotus.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { ProfileComponent } from './profile/profile.component';
import { R46Component } from './r46/r46.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {  path : '',component:HomeComponent},
  {  path  :'profile',component:ProfileComponent},
  {  path : 'aboutus',component:AbotusComponent},
  {  path : 'register',component:RegisterComponent},
  {  path : 'login', component:LoginPageComponent},
  {  path: 'r46',component:R46Component},
  { path: 'registerpatient',component:PatientRegisterComponent},
  { path: 'appointment',component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
