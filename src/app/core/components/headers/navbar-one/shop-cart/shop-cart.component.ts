import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { products } from '../../../../interfaces/products';

@Component({
  selector: 'shop-cart',
  standalone: true,
  imports: [
    NgFor,NgIf ,RouterLink,
    TitleCasePipe, CurrencyPipe,
    NgClass, CommonModule,RouterLink,RouterModule
  ],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent implements OnInit {
  canShowModal = false;
  canShowSignInModal = false;
  totalItems:number = 0;
  data:products[]=[];
  totalAmount:number=0;
  
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItems = res.length;
      this.data = res
      this.totalAmount = this.getTotal(this.data)
    })
  }

  updateCart(){
    this.cartService.removeAllCart()
    this.totalAmount =this.cartService.calculPrice()
  }

  removeToCart(product:products){
    this.cartService.removeCartItem(product)
    this.totalAmount =this.cartService.calculPrice()
  }

 
  increment(product:products){
    if(product.quantite < 30){
      this.cartService.incrementQuantity(product.id)
      this.totalAmount = this.cartService.calculPrice()
    }
  }
  decrement(product:products){
    if(product.quantite >=2){
     this.cartService.decrementQuantity(product.id)
     this.totalAmount = this.cartService.calculPrice()
    }
  }
  getTotal(data:products[]){
    let total =0
    data.map((a:products)=>{
      total += a.prix_reduit * a.quantite
    })
    return total
  }
}
