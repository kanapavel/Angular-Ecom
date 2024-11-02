import { Component, inject, OnInit} from '@angular/core';
import { RouterModule,RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { products } from '../../../core/interfaces/products';
import { NgFor, NgIf } from '@angular/common';
import { initFlowbite } from 'flowbite';

import { CoreModule } from '../../../core/core.module';
import { PopularProductsComponent } from '../../home/components/popular-products/popular-products/popular-products.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CoreModule,RouterModule,NgFor,NgIf,PopularProductsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  ProductsList: products[] = [];
  products: ProductsService = inject(ProductsService);
  constructor() {
    this.ProductsList = this.products.getAllProducts()
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
