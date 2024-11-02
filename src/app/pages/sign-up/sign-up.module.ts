import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './signup/sign-up/sign-up.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SignUpComponent
  ]
})
export class SignUpModule { }
