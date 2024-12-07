import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { FavoriesService } from '../../../core/services/favories.service';
import { products } from '../../../core/interfaces/products';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CoreModule,NgFor,CurrencyPipe,NgClass,RouterModule,TranslatePipe],
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
  }

  // @ViewChild('checkAll') checkAll!:ElementRef<HTMLInputElement>
  // @ViewChild('checkboxItems') checkbox!:ElementRef<HTMLInputElement>

  // ngAfterViewInit(): void {
  //   this.checkAll.nativeElement.addEventListener('click',()=>{
  //     if(this.checkbox.nativeElement.checked){
  //       this.checkbox.nativeElement.setAttribute('checked','true');
  //     }else{
  //       this.checkbox.nativeElement.removeAttribute('checked')
  //     }
  //   })
  // }

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
