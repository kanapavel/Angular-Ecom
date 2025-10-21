import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgFor, NgStyle } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyService } from '../../../../../core/services/currency.service';



@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [NgFor,NgStyle,TranslatePipe,CurrencyPipe],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent implements OnInit{
  selectedCurrency!:string;
  constructor(private currencyService:CurrencyService){}

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

   ngOnInit(): void {
    this.currencyService.getSelectedSymbol().subscribe(symbol=>{
      this.selectedCurrency = symbol
    })
   }

   convertPrice(price:number){
    return this.currencyService.convertPrice(price);
   }

}
