import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    NotificationComponent
  ]
})
export class MyAccountModule { }
