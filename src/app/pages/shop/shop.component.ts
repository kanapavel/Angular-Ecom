import { Component, inject} from '@angular/core';
import { HeaderLangageComponent } from '../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../common/headers/navbar-two/navbar-two.component';
import { FooterComponent } from "../common/footer/footer/footer.component";
import { RouterModule,RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { products } from '../../interfaces/products';
import { NgFor, NgIf } from '@angular/common';
import { PopularProductsComponent } from '../home/popular-products/popular-products/popular-products.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderLangageComponent, NavbarOneComponent,
     NavbarTwoComponent, FooterComponent,RouterLinkActive,
     RouterLink,RouterModule,NgFor,NgIf,PopularProductsComponent
    ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  ProductsList: products[] = [];
  products: ProductsService = inject(ProductsService);
  constructor() {
    this.ProductsList = this.products.getAllProducts()
  }
}
