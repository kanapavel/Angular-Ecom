import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencies = ['USD', 'EUR', 'XAF'];

  private rates: { [key: string]: number } = {
    USD: 1.06,
    EUR: 0.95,
    XAF: 620
  };

  private symbols: { [key: string]: string } = {
    USD: '$',
    EUR: '€',
    XAF: 'CFA'
  };

  private selectedCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.currencies[0]);
  private selectedSymbolSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.symbols[this.currencies[0]]);

  constructor() { }

  getCurrencyAvailable(): string[] {
    return this.currencies;
  }

  getSelectedCurrency(): Observable<string> {
    return this.selectedCurrencySubject.asObservable();
  }

  getSelectedSymbol(): Observable<string> {
    return this.selectedSymbolSubject.asObservable();
  }

  selectCurrency(currency: string): void {
    if (this.currencies.includes(currency)) {
      this.selectedCurrencySubject.next(currency);
      this.selectedSymbolSubject.next(this.symbols[currency]); 
    }
  }

  convertPrice(price: number): number {
    const selectedCurrency = this.selectedCurrencySubject.getValue();
    let convertedPrice: number;

    switch (selectedCurrency) {
      case 'USD':
        convertedPrice = price; 
        break;
      case 'EUR':
        convertedPrice = price * this.rates['EUR']; // Convertir en EUR
        break;
      case 'XAF':
        convertedPrice = price * this.rates['XAF']; // Convertir en XAF
        break;
      default:
        convertedPrice = price; // Retourne le prix sans conversion par défaut
    }

    return convertedPrice;
  }
}