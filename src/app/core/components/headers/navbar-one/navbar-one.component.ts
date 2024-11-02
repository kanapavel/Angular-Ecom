import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { LocationPopupComponent } from "../../modals/location-popup/location-popup.component";
import { SignUpPopupComponent } from "../../modals/sign-up-popup/sign-up-popup.component";
import { RouterLink, RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar-one',
  standalone: true,
  imports: [
    NgFor,NgIf ,
    TitleCasePipe, CurrencyPipe,
    NgClass, CommonModule, LocationPopupComponent,
     SignUpPopupComponent,RouterLink,RouterModule
  ],
  templateUrl: './navbar-one.component.html',
  styleUrl: './navbar-one.component.css'
})
export class NavbarOneComponent implements OnInit {
  canShowModal = false;
  canShowSignInModal = false;

  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }

  data=[
    {
      id:1,
      img:'assets/products/product-img-1.png',
      name:'Haldiram\'s Sev Bhujia',
      reduction:5,
      weigth:'.98 / Ib'
    },
    {
      id:2,
      img:'assets/products/product-img-2.png',
      name:'NutriChoice Digestive',
      price:26,
      reduction:20,
      weigth:'250g'
    },
    {
      id:3,
      img:'assets/products/product-img-3.png',
      name:'Cadbury 5 Star Chocolate',
      price:20,
      reduction:15,
      weigth:'1kg'
    },
    {
      id:4,
      img:'assets/products/product-img-4.png',
      name:'Onion Flavour Potato',
      price:20,
      reduction:15,
      weigth:'250g'
    },
    {
      id:5,
      img:'assets/products/product-img-5.png',
      name:'Salted Instant Popcorn',
      price:20,
      reduction:15,
      weigth:'100g'
    },
  ]
}
