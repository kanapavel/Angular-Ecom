import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:products[]= [];
  public productList = new BehaviorSubject<any>([]);
  private storagekey = 'cartItems'

  constructor(private notificationService:NotificationsService) { 
    const storedItems = localStorage.getItem(this.storagekey);
    if(storedItems){
      this.cartItems = JSON.parse(storedItems)
    }
  }

  getCartItem(){
    return this.cartItems
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:products[]){
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:products){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.notificationService.showSuccess(`${product.nom} added in the cart`)
    localStorage.setItem(this.storagekey, JSON.stringify(this.cartItems))
  }

  removeCartItem(product:products){
    product.quantite = 1
    this.cartItems.map((a:products, index:any)=>{
      if(product.id === a.id){
        this.cartItems.splice(index,1)
        this.notificationService.showSuccess(`${product.nom} is remove in the cart`)
        localStorage.setItem(this.storagekey, JSON.stringify(this.cartItems))
      }
    })
    this.productList.next(this.cartItems)
  }

  removeAllCart(){
    this.cartItems = []
    this.productList.next(this.cartItems)
  }

  isInCart(product:products):boolean{
    return this.cartItems.some(item => item.id === product.id)
  }

  incrementQuantity(id:number){
    let item = this.cartItems.find((i)=> i.id === id);
    if(item){
      item.quantite++;
    }
  }
  decrementQuantity(id:number){
    let item = this.cartItems.find((i)=> i.id === id);
    if(item){
      item.quantite--;
    }
  }
  
  calculPrice(){
    return this.cartItems.reduce((acc, item)=>{
      return acc + item.prix_reduit * item.quantite
    }, 0);
  }
}
