import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { HotdealsComponent } from './components/hotdeals/hotdeals.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WebsiteComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    HotdealsComponent,
    BannerComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    HttpClientModule
  ]
})
export class WebsiteModule { }
