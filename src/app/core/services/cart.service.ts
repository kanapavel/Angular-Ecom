import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: products[] = [];
  private productList = new BehaviorSubject<products[]>([]);
  private storageKey = 'cartItems';

  constructor(private notificationService: NotificationsService) {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage() {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      try {
        this.cartItems = JSON.parse(storedItems);
        this.productList.next(this.cartItems); // Mettez à jour le BehaviorSubject avec les données chargées
      } catch (error) {
        console.error('Erreur de parsing des données depuis localStorage:', error);
      }
    }
  }

  getCartItems() {
    return this.cartItems; 
  }

  getProducts() {
    return this.productList.asObservable(); // Exposez l'observable
  }

  setProduct(products: products[]) {
    this.cartItems.push(...products);
    this.updateLocalStorage();
    this.productList.next(this.cartItems); // Notifiez les abonnés
  }

  addtoCart(product: products) {
    this.cartItems.push(product);
    this.updateLocalStorage();
    this.productList.next(this.cartItems); // Notifiez les abonnés
    this.notificationService.showSuccess(`${product.nom} added to the cart`);
  }

  removeCartItem(product: products) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    this.updateLocalStorage();
    this.productList.next(this.cartItems); // Notifiez les abonnés
    this.notificationService.showSuccess(`${product.nom} removed from the cart`);
  }

  removeAllCart() {
    this.cartItems = [];
    this.updateLocalStorage();
    this.productList.next(this.cartItems); // Notifiez les abonnés
  }

  isInCart(product: products): boolean {
    return this.cartItems.some(item => item.id === product.id);
  }

  incrementQuantity(id: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item) {
      item.quantite++;
      this.updateLocalStorage(); // Mettez à jour le stockage après modification
      this.productList.next(this.cartItems); // Notifiez les abonnés
    }
  }

  decrementQuantity(id: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item && item.quantite > 1) { 
      item.quantite--;
      this.updateLocalStorage(); // Mettez à jour le stockage après modification
      this.productList.next(this.cartItems); // Notifiez les abonnés
    }
  }

  calculPrice() {
    return this.cartItems.reduce((acc, item) => {
      return acc + item.prix_reduit * item.quantite;
    }, 0);
  }

  private updateLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }
}