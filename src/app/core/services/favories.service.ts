import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { NotificationsService } from './notifications.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriesService {
  private favorieItems: products[] = [];
  private productList = new BehaviorSubject<products[]>([]);
  private storageKey = 'favorieItems';

  constructor(private notificationService: NotificationsService) {
    this.loadFavoritesFromStorage();
  }

  private loadFavoritesFromStorage() {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      try {
        this.favorieItems = JSON.parse(storedItems);
        // Mettre à jour le BehaviorSubject avec les données chargées
        this.productList.next(this.favorieItems);
      } catch (error) {
        console.error('Erreur de parsing des données depuis localStorage:', error);
      }
    }
  }

  getProducts() {
    return this.productList.asObservable(); // Exposez l'observable
  }

  addToFavorie(product: products) {
    if (!this.isInFavorie(product)) {
      this.favorieItems.push(product);
      this.updateLocalStorage();
      this.productList.next(this.favorieItems); // Notifiez les abonnés
      this.notificationService.showSuccess(`${product.nom} added to favorites`);
    }
  }

  removeFavorieItem(product: products) {
    this.favorieItems = this.favorieItems.filter(item => item.id !== product.id);
    this.updateLocalStorage();
    this.productList.next(this.favorieItems); // Notifiez les abonnés
    this.notificationService.showSuccess(`${product.nom} removed from favorites`);
  }

  removeAllFavorites() {
    this.favorieItems = [];
    this.updateLocalStorage();
    this.productList.next(this.favorieItems); // Notifiez les abonnés
  }

  isInFavorie(product: products): boolean {
    return this.favorieItems.some(item => item.id === product.id);
  }

  private updateLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favorieItems));
  }
}