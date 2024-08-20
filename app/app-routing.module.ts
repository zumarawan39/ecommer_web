import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path:"",loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:"website",loadChildren:()=>import('./website/website.module').then((m)=>m.WebsiteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
