import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components/shop.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ShopComponent
  ]
})
export class ShopModule { }
