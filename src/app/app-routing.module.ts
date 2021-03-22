import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbotusComponent } from './abotus/abotus.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {  path : '',component:HomeComponent},
  {  path  :'profile',component:ProfileComponent},
  {  path : 'aboutus',component:AbotusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
