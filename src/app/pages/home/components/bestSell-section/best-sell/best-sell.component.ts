import { AsyncPipe, CurrencyPipe, NgClass, NgIf, NgStyle, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { initFlowbite } from 'flowbite';
import { ProductsService } from '../../../../../core/services/products.service';
import { products } from '../../../../../core/interfaces/products';
import { CartService } from '../../../../../core/services/cart.service';
import { ViewModalComponent } from '../../../../../core/components/modals/viewModal/view-modal.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FavoriesService } from '../../../../../core/services/favories.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-best-sell',
  standalone: true,
  imports: [
    NgStyle,NgFor,CurrencyPipe,NgIf,CountDownComponent,
    AsyncPipe,SlicePipe,NgClass,ViewModalComponent,RouterModule,
    RatingModule,FormsModule,TranslatePipe
  ],
  templateUrl: './best-sell.component.html',
  styleUrl: './best-sell.component.css'
})
export class BestSellComponent implements OnInit{
  isAdded = false;
  canShowModal = false;
  produits:products[]=[]
  constructor(private productService:ProductsService,private cartService:CartService,private favorieService:FavoriesService){}

  Products!:products 
  ngOnInit(): void {
    initFlowbite();
    this.productService.getAllProducts().subscribe(res=>{
      this.produits = res
    })
  }
  toggleAddCart(product:products){
    if(this.isInCart(product)){
      this.cartService.removeCartItem(product)
    }else{
      this.cartService.addtoCart(product)
    }
  }

  isInCart(product:products):boolean{
    return this.cartService.isInCart(product)
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

  view(product:products){
    this.Products = product
    this.canShowModal =true
  }
}
