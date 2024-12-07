import { Component, Input, OnInit } from '@angular/core';
import { products } from '../../../../../core/interfaces/products';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { CartService } from '../../../../../core/services/cart.service';
import { ViewModalComponent } from '../../../../../core/components/modals/viewModal/view-modal.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FavoriesService } from '../../../../../core/services/favories.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [
    NgIf,CurrencyPipe,NgClass,ViewModalComponent,RouterModule,
    RatingModule,FormsModule,TranslatePipe
  ],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent implements OnInit {

  @Input() data!:products;
  @Input() isDetails!:boolean
  canShowModal = false;
  
  constructor(private cartService:CartService,private favorieService:FavoriesService){}
  
  Products!:products 
  ngOnInit(): void {
    initFlowbite();
  }

  
  toggleAddCart(product:products){
    if(this.isInCart(product)){
      this.cartService.removeCartItem(product)
    }else{
      this.cartService.addtoCart(product)
      this.cartService.calculPrice()
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
