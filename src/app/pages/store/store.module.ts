import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRoutingModule,
    StoreComponent
  ]
})
export class StoreModule { }
