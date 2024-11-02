import { CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-best-sell',
  standalone: true,
  imports: [NgStyle,NgFor,CurrencyPipe,NgIf,CountDownComponent],
  templateUrl: './best-sell.component.html',
  styleUrl: './best-sell.component.css'
})
export class BestSellComponent {


  data = [
    {
      id:20,
      img:'assets/products/product-img-11.png',
      name1:'Tea, Coffee & Drinks',
      name2:'Roast Ground Coffee',
      ranting:4.5,
      price:18,
      reduction:13,
  },
  {
      id:21,
      img:'assets/products/product-img-12.png',
      name1:'Fruits & Vegetables',
      name2:'Crushed Tomatoes',
      ranting:4.5,
      price:18,
      reduction:13,
  },
  {
      id:22,
      img:'assets/products/product-img-13.jpg',
      name1:'Fruits & Vegetables',
      name2:'Golden Pineapple',
      ranting:4.5,
      price:18,
      reduction:13,
  },
  ]
}
