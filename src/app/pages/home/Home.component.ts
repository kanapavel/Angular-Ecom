import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { products } from '../../core/interfaces/products';
import { ProductsService } from '../../core/services/products.service';
import { CoreModule } from '../../core/core.module';
import { BestSellComponent } from './components/bestSell-section/best-sell/best-sell.component';
import { FeaturedSectionComponent } from './components/featured-categories/featured-section/featured-section.component';
import { LastSectionComponent } from './components/last-section/last-section.component';
import { PopularProductsComponent } from './components/popular-products/popular-products/popular-products.component';
import { SectionOneComponent } from './components/first-section/section-one/section-one.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    CoreModule,BestSellComponent,
    FeaturedSectionComponent,LastSectionComponent,
    PopularProductsComponent,SectionOneComponent,AsyncPipe
],
  templateUrl: './Home.component.html',
})
export class HomeComponent implements OnInit{

    produits:products[]=[]
    constructor(private productService:ProductsService){}

    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(res=>{
        this.produits = res
      })
    }
}