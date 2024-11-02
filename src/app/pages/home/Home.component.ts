import { Component,inject, OnInit } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { products } from '../../core/interfaces/products';
import { ProductsService } from '../../core/services/products.service';
import { CoreModule } from '../../core/core.module';
import { BestSellComponent } from './components/bestSell-section/best-sell/best-sell.component';
import { FeaturedSectionComponent } from './components/featured-categories/featured-section/featured-section.component';
import { LastSectionComponent } from './components/last-section/last-section.component';
import { PopularProductsComponent } from './components/popular-products/popular-products/popular-products.component';
import { SectionOneComponent } from './components/first-section/section-one/section-one.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    CoreModule,BestSellComponent,
    FeaturedSectionComponent,LastSectionComponent,
    PopularProductsComponent,SectionOneComponent
],
  templateUrl: './Home.component.html',
})
export class HomeComponent {

    produits:products[] = [];
    Product:ProductsService = inject(ProductsService)
    constructor(){
        this.produits = this.Product.getAllProducts();
    }

}