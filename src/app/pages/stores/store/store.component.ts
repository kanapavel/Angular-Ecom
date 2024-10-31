import { Component,inject } from '@angular/core';
import { HeaderLangageComponent } from '../../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../../common/headers/navbar-two/navbar-two.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StoreProductService } from '../../../services/store-product.service';
import { storeProducts } from '../../../interfaces/storeProducts';
import { FooterComponent } from '../../common/footer/footer/footer.component';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,HeaderLangageComponent,
    NavbarOneComponent,NavbarTwoComponent,NgIf,NgFor,FooterComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  storeList : storeProducts[]=[];
  storeProduct:StoreProductService = inject(StoreProductService);

  constructor(){
    this.storeList = this.storeProduct.getAllStoreProducts();
  }
}
