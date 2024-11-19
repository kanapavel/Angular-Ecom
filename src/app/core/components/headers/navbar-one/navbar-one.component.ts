import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { LocationPopupComponent } from "../../modals/location-popup/location-popup.component";
import { SignUpPopupComponent } from "../../modals/sign-up-popup/sign-up-popup.component";
import { RouterLink, RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { FavoriesService } from '../../../services/favories.service';

@Component({
  selector: 'app-navbar-one',
  standalone: true,
  imports: [
    NgFor, NgIf,
    TitleCasePipe, CurrencyPipe,
    NgClass, CommonModule, LocationPopupComponent,
    SignUpPopupComponent, RouterLink, RouterModule,
    ShopCartComponent
],
  templateUrl: './navbar-one.component.html',
  styleUrl: './navbar-one.component.css'
})
export class NavbarOneComponent implements OnInit {
  canShowModal = false;
  canShowSignInModal = false;
  totalItemsFavorie:number = 0

  constructor(private favorieService:FavoriesService){
    this.favorieService.getProducts().subscribe(res=>{
      this.totalItemsFavorie = res.length
    })
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
