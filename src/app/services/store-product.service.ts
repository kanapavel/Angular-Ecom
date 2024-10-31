import { Injectable } from '@angular/core';
import { storeProducts } from '../interfaces/storeProducts';

@Injectable({
  providedIn: 'root'
})
export class StoreProductService {

  constructor() { }

  storeProducts:storeProducts[] = [
    {
      id:1,
      img:'assets/img-storelist/stores-logo-1.svg',
      title:'E-Grocery Super Market',
      text1:'Organic',
      text2:'Groceries',
      text3:'Butcher Shop',
      textOffTime:'Delivery',
      description:'Pickup available',
      distance:'7.5 mi away',
      store:'In-store prices',
    },
    {
      id:2,
      img:'assets/img-storelist/stores-logo-2.svg',
      title:'DealShare Mart',
      text1:'Alcohol',
      text2:'Groceries',
      textOffTime:'Delivery',
      description:'Pickup available',
      distance:'7.5 mi away',
      store:'In-store prices',
    },
    {
      id:3,
      img:'assets/img-storelist/stores-logo-3.svg',
      title:'E-Grocery Super Market',
      text1:'Groceries ',
      text2:'Bakery Deli',
      textWithTime:'Delivery by 10:30pm',
      description:'Pickup available',
      distance:'9.3 mi away',
    },
    {
      id:4,
      img:'assets/img-storelist/stores-logo-4.svg',
      title:'Blinkit Store',
      text1:'Meal Kits',
      text2:'Prepared Meals',
      text3:'Organic',
      textOffTime:'Delivery',
      description:'Pickup available',
      distance:'40.5 mi away',
    },
    {
      id:5,
      img:'assets/img-storelist/stores-logo-5.svg',
      title:'StoreFront Super Market',
      text1:'Groceries',
      text2:'Bakery',
      textWithTime:'Delivery by 11:30pm',
      description:'Pickup available',
      distance:'28.1 mi away',
    },
    {
      id:6,
      img:'assets/img-storelist/stores-logo-6.svg',
      title:'BigBasket',
      text1:'Groceries',
      text2:'Deli',
      textWithTime:'Delivery by 10:30pm',
      description:'Pickup available',
      distance:'7.5 mi away',
    },
    {
      id:7,
      img:'assets/img-storelist/stores-logo-7.svg',
      title:'Swiggy Instamart',
      text1:'Meal Kits',
      text2:'Prepared Meals',
      text3:'Organic',
      textOffTime:'Delivery',
      description:'Pickup available',
      distance:'40.5 mi away',
    },
    {
      id:8,
      img:'assets/img-storelist/stores-logo-6.svg',
      title:'Online Grocery Mart',
      text1:'Groceries ',
      text2:'Bakery',
      textWithTime:'Delivery by 11:30pm',
      description:'Pickup available',
      distance:'28.1 mi away',
    },
    {
      id:9,
      img:'assets/img-storelist/stores-logo-9.svg',
      title:'Spencers',
      text1:'Groceries',
      text2:'Deli',
      textWithTime:'Delivery by 10:30pm',
      description:'Pickup available',
      distance:'7.5 mi away',
    },
  ]

  getAllStoreProducts(){
    return this.storeProducts;
  }
}
