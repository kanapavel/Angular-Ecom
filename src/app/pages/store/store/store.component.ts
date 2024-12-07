import { Component,inject, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StoreProductService } from '../../../core/services/store-product.service';
import { storeProducts } from '../../../core/interfaces/storeProducts';
import { CoreModule } from '../../../core/core.module';
import { NgModel } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,NgIf,NgFor,CoreModule,TranslatePipe],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{
  storeList : storeProducts[]=[];
  storeProduct:StoreProductService = inject(StoreProductService);
  prix:number = 0
  valeur:number = 0
  constructor(){
    this.storeList = this.storeProduct.getAllStoreProducts();
  }
  ngOnInit(): void {
    const inputNumber = document.getElementById('qte') as HTMLInputElement
    if(inputNumber){
      inputNumber.addEventListener('input',(event)=>{
        let valeur = parseInt((event.target as HTMLInputElement).value)
        console.log(valeur);    
      })
    }
  }
}
