import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { NotificationsService } from './notifications.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriesService {
  favorieItems:products[]=[]

  public productList = new BehaviorSubject<any>([]);
  private storagekey = 'favorieItems'

  constructor(private notificationService:NotificationsService) { 
    const storedItems = localStorage.getItem(this.storagekey);
    if(storedItems){
      this.favorieItems = JSON.parse(storedItems)
    }
  }

  getFavorieItem(){
    return this.favorieItems
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:products[]){
    this.favorieItems.push(...product);
    this.productList.next(product);
  }

  addtoFavorie(product:products){
    this.favorieItems.push(product);
    this.productList.next(this.favorieItems);
    this.notificationService.showSuccess(`${product.nom} added in the favorie`)
    localStorage.setItem(this.storagekey, JSON.stringify(this.favorieItems))
  }

  removeFavorieItem(product:products){
    product.quantite = 1
    this.favorieItems.map((a:products, index:any)=>{
      if(product.id === a.id){
        this.favorieItems.splice(index,1)
        this.notificationService.showSuccess(`${product.nom} is remove in the favorie`)
        localStorage.setItem(this.storagekey, JSON.stringify(this.favorieItems))
      }
    })
    this.productList.next(this.favorieItems)
  }

  removeAllCart(){
    this.favorieItems = []
    this.productList.next(this.favorieItems)
  }

  isInfavorie(product:products):boolean{
    return this.favorieItems.some(item => item.id === product.id)
  }

}
