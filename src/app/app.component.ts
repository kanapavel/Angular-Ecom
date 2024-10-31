import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderLangageComponent } from './pages/common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from './pages/common/headers/navbar-one/navbar-one.component';
import { CommonModule } from '@angular/common';
import { NavbarTwoComponent } from './pages/common/headers/navbar-two/navbar-two.component';
import { MainComponent } from "./main/main.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderLangageComponent, NavbarOneComponent, NavbarTwoComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Ecom';

  ngOnInit(): void {
    initFlowbite();
  }
}
