import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { FavoriesService } from '../../../core/services/favories.service';
import { products } from '../../../core/interfaces/products';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CoreModule,NgFor,CurrencyPipe,NgClass],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  items:products[]=[]
  constructor(private favorieService:FavoriesService,private cartService:CartService){}

  ngOnInit(): void {
    this.favorieService.getProducts().subscribe(res=>{
      this.items = res
    })
  }

  removeToWishlist(item:products){
    this.favorieService.removeFavorieItem(item)
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
}
