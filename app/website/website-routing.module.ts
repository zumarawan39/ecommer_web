import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"",component:WebsiteComponent,children:[
    {path:"",component:BannerComponent},
    {path:"",component:ProductsComponent},
    {path:"banner",component:BannerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
