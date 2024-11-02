import { Component,inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StoreProductService } from '../../../core/services/store-product.service';
import { storeProducts } from '../../../core/interfaces/storeProducts';
import { CoreModule } from '../../../core/core.module';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,NgIf,NgFor,CoreModule],
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
