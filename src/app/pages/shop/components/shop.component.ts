import { Component, inject, OnInit} from '@angular/core';
import { RouterModule,RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { products } from '../../../core/interfaces/products';
import { NgFor, NgIf } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { AsyncPipe,SlicePipe } from '@angular/common';


import { CoreModule } from '../../../core/core.module';
import { PopularProductsComponent } from '../../home/components/popular-products/popular-products/popular-products.component';
import { map, Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CoreModule,RouterModule,NgFor,NgIf,PopularProductsComponent,AsyncPipe,SlicePipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{

  ProductsList:products[]=[];
  constructor(private productService:ProductsService){}

  ngOnInit(): void {
    initFlowbite();
    this.productService.getAllProducts().subscribe(
      res=>{
        this.ProductsList=res
      })
  }
}
