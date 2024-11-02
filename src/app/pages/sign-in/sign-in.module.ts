import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './signin/sign-in.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInRoutingModule,SignInComponent
  ]
})
export class SignInModule { }
