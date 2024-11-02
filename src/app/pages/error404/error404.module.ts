import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './components/error-404.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Error404RoutingModule,
    Error404Component
  ]
})
export class Error404Module { }
