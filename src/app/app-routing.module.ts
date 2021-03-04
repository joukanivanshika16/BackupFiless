import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackerComponent} from './tracker/tracker.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:'',redirectTo:'./login',pathMatch:'full'},
  {
    path:'login',component:LoginComponent,
    
    },
   
  {path:'tracker',component:TrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
