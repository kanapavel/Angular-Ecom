import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';


@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {

  constructor(){}

   data = [
    {
      img:'assets/home-img/slide-1.jpg',
      warning:'Opening Sale Discount 50%',
      title:'SuperMarket For Fresh Grocery',
      description:'Introduced a new model for online grocery shopping and convenient home delivery.',
    },
    {
      img:'assets/home-img/slider-2.jpg',
      warning:'Free Shipping - orders over $100',
      title:'Free Shipping on orders over',
      title_price:'$100', 
      description:'Free Shipping to First-Time Customers Only, After promotion and discounts are applied.',
    },
    {
      img:'assets/home-img/slide-1.jpg',
      warning:'Opening Sale Discount 50%',
      title:'SuperMarket For Fresh Grocery',
      description:'Introduced a new model for online grocery shopping and convenient home delivery.',
    },
    {
      img:'assets/home-img/slider-2.jpg',
      warning:'Free Shipping - orders over $100',
      title:'Free Shipping on orders over',
      title_price:'$100', 
      description:'Free Shipping to First-Time Customers Only, After promotion and discounts are applied.',
    },
   ]

  

}
