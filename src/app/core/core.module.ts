import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderLangageComponent } from './components/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from './components/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './components/headers/navbar-two/navbar-two.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { initFlowbite } from 'flowbite';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HeaderLangageComponent,
    NavbarOneComponent,
    NavbarTwoComponent,FooterComponent,
  ],
  exports: [
    HeaderLangageComponent,
    NavbarOneComponent,
    NavbarTwoComponent,FooterComponent
  ]
})
export class CoreModule implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
