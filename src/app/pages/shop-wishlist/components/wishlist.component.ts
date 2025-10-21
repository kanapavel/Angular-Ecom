import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { FavoriesService } from '../../../core/services/favories.service';
import { products } from '../../../core/interfaces/products';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyService } from '../../../core/services/currency.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CoreModule,NgFor,CurrencyPipe,NgClass,RouterModule,TranslatePipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  items:products[]=[]
  selectedCurrency!:string
  
  constructor(private favorieService:FavoriesService,private cartService:CartService,
    private currencyService:CurrencyService
  ){}

  ngOnInit(): void {
    this.favorieService.getProducts().subscribe(res=>{
      this.items = res
    })

    const checkboxItem = document.querySelectorAll('checkbox')
    const checkboxAll = document.getElementById('checkbox-all') as HTMLInputElement
    console.log(checkboxAll,checkboxItem);

    if(checkboxAll){
      checkboxAll.addEventListener('click',()=>{
        if(checkboxItem){
          checkboxItem.forEach((item)=>{
            item.setAttribute('checked','true')
          })
        }
      })
    }
    this.currencyService.getSelectedSymbol().subscribe(symbol=>{
      this.selectedCurrency = symbol
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
  convertPrice(price:number){
    return this.currencyService.convertPrice(price);
   }
}
