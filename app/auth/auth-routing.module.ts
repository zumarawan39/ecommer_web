import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path:"",component:AuthComponent,children:[
    {path:"",component:SignUpComponent},
    {path:"signUp",component:SignUpComponent},
    {path:"login",component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
