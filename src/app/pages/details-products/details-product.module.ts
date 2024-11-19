import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductRoutingModule } from './details-product-routing.module';
import { DetailsProductsComponent } from './components/details-products.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailsProductRoutingModule,DetailsProductsComponent
  ]
})
export class DetailsProductModule { }
