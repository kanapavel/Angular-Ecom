import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { products } from '../../../core/interfaces/products';
import { CoreModule } from '../../../core/core.module';
import { ProductsService } from '../../../core/services/products.service';
import { CommonModule, NgClass, NgIf, SlicePipe, TitleCasePipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { TabsComponent } from './tabs/tabs.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PopularProductsComponent } from '../../home/components/popular-products/popular-products/popular-products.component';
import { FavoriesService } from '../../../core/services/favories.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-details-products',
  standalone: true,
  imports: [
    RouterLink,RouterModule,CoreModule,NgIf,
    TitleCasePipe,NgClass,TabsComponent,CommonModule,
    RatingModule,FormsModule,PopularProductsComponent,SlicePipe,TranslatePipe
  ],
  templateUrl: './details-products.component.html',
  styleUrl: './details-products.component.css'
})
export class DetailsProductsComponent implements OnInit{
  item!:products;
  allProducts!:products[]
  constructor(private productService:ProductsService, private activeRoute:ActivatedRoute,
    private cartService:CartService,private favorieService:FavoriesService){}
  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    id && this.productService.getProductById(id).subscribe((result)=>{
      this.item = result
    })
    this.productService.getAllProducts().subscribe((res)=>{
      this.allProducts = res
    })
  }

  toggleAddCart(product:products){
    if(this.isInCart(product)){
      this.cartService.removeCartItem(product)
    }else{
      this.cartService.addtoCart(product)
      this.cartService.calculPrice()
    }
  }
  toggleAddFavorie(product:products){
    if(this.isInFavorie(product)){
      this.favorieService.removeFavorieItem(product)
    }else{
      this.favorieService.addToFavorie(product)
    }
  }

  isInFavorie(product:products):boolean{
    return this.favorieService.isInFavorie(product)
  }

  isInCart(product:products):boolean{
    return this.cartService.isInCart(product)
  }
  increment(product:products){
    if(product.quantite < 30){
      product.quantite++
    }
  }
  decrement(product:products){
    if(product.quantite >=2){
     product.quantite--
    }
  }
}
