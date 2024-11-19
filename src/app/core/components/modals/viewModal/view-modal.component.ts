import { Component, Input, Output } from '@angular/core';
import{CommonModule, NgClass, NgFor, NgIf, TitleCasePipe} from '@angular/common';
import { products } from '../../../interfaces/products';
import { EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { FavoriesService } from '../../../services/favories.service';


@Component({
  selector: 'app-view-modal',
  standalone: true,
  imports: [CommonModule,NgIf,NgFor,TitleCasePipe,NgClass,RatingModule,FormsModule],
  templateUrl: './view-modal.component.html',
  styleUrl: './view-modal.component.css'
})
export class ViewModalComponent{
    @Input('showModal')
    showModal = false;
    @Input('item') 
    item!:products

    @Output('close')
    onClose = new EventEmitter()

    constructor(private cartService:CartService,private favorieService:FavoriesService){}
    
    onCloseModalOusideClick(event:MouseEvent){
        const targetElement = event.target as HTMLElement;
        if (targetElement.classList.contains('bg-modals')){
          this.onClose.emit()
        }
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
        this.favorieService.addtoFavorie(product)
      }
    }
  
    isInFavorie(product:products):boolean{
      return this.favorieService.isInfavorie(product)
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
