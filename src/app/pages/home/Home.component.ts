import { Component,inject } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { HeaderLangageComponent } from '../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../common/headers/navbar-two/navbar-two.component';
import { SectionOneComponent } from './first-section/section-one/section-one.component';
import { FeaturedSectionComponent } from "./featured-categories/featured-section/featured-section.component";
import { FooterComponent } from '../common/footer/footer/footer.component';
import { PopularProductsComponent } from './popular-products/popular-products/popular-products.component';
import { products } from '../../interfaces/products';
import { BestSellComponent } from './bestSell-section/best-sell/best-sell.component';
import { LastSectionComponent } from './last-section/last-section.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NavbarOneComponent,
    NavbarTwoComponent,
    HeaderLangageComponent,
    SectionOneComponent,
    FeaturedSectionComponent,
    FooterComponent,
    PopularProductsComponent,
    BestSellComponent,
    LastSectionComponent
],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css'
})
export class HomeComponent {

    produits:products[] = [];
    Product:ProductsService = inject(ProductsService)
    constructor(){
        this.produits = this.Product.getAllProducts();
    }
    
}
