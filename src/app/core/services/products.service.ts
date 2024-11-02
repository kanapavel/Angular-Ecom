import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products:products[] = [
    {
        id:1,
        img:'assets/products/product-img-1.png',
        name1:'Snack & Munchies',
        name2:'Haldiram\'s Sev Bhujia',
        ranting:4.5,
        nbrAvis:149,
        price:24,
        reduction:18,
        indication:'Sale'
    },
    {
        id:2,
        img:'assets/products/product-img-2.png',
        name1:'Bakery & Biscuits',
        name2:'NutriChoice Digestive',
        ranting:4.5,
        nbrAvis:25,
        price:24,
        indication:'14%'
    },
    {
        id:3,
        img:'assets/products/product-img-3.png',
        name1:'Bakery & Biscuits',
        name2:'Cadbury 5 Star Chocolate',
        ranting:5,
        nbrAvis:469,
        price:35,
        reduction:32,
    },
    {
        id:4,
        img:'assets/products/product-img-4.png',
        name1:'Snack & Munchies',
        name2:'Onion Flavour Potato',
        ranting:3.5,
        nbrAvis:456,
        price:5,
        reduction:3,
        indication:'Hot'
    },
    {
        id:5,
        img:'assets/products/product-img-5.png',
        name1:'Instant Food',
        name2:'Salted Instant Popcorn',
        ranting:4.5,
        nbrAvis:39,
        price:18,
        reduction:13,
    },
    {
        id:6,
        img:'assets/products/product-img-6.png',
        name1:'Dairy, Bread & Eggs',
        name2:'Blueberry Greek Yogurt',
        ranting:4.5,
        nbrAvis:189,
        price:24,
        reduction:18,
        indication:'Sale'
    },
    {
        id:7,
        img:'assets/products/product-img-7.png',
        name1:'Dairy, Bread & Eggs',
        name2:'Britannia Cheese Slices',
        ranting:5,
        nbrAvis:345,
        price:24,
    },
    {
        id:8,
        img:'assets/products/product-img-8.png',
        name1:'Instant Food',
        name2:'Kellogg\'s Original Cereals',
        ranting:4,
        nbrAvis:90,
        price:35,
        reduction:32,
    },
    {
        id:9,
        img:'assets/products/product-img-9.png',
        name1:'Snack & Munchies',
        name2:'Slurrp Millet Chocolate',
        ranting:4.5,
        nbrAvis:67,
        price:5,
        reduction:3,
    },
    {
        id:10,
        img:'assets/products/product-img-10.png',
        name1:'Dairy, Bread & Eggs',
        name2:'Amul Butter - 500 g',
        ranting:3.5,
        nbrAvis:89,
        price:18,
        reduction:13,
    },
  ]

  getAllProducts(): products[] {
    return this.products;
  }
}
