import { Component, Input } from '@angular/core';
import { products } from '../../../../interfaces/products';
import { CurrencyPipe, NgIf, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [NgIf,NgSwitch,CurrencyPipe],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent {
  @Input() data!:products;
  constructor(){}
  
}
