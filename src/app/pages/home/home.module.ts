import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './Home-routing.module';
import { HomeComponent } from './Home.component';
import { DetailsProductsComponent } from '../details-products/components/details-products.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent,
    DetailsProductsComponent
  ],
  exports: [
    HomeComponent,
    DetailsProductsComponent
  ]
})
export class HomeModule { }
