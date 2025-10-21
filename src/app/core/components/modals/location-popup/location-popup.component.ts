import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports: [CommonModule,TitleCasePipe,NgIf,TranslatePipe],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.css'
})
export class LocationPopupComponent implements OnInit {

  @Input('showModal')
  showModal = false;
  
  @Output('close')
  onClose = new EventEmitter()
  selectedCurrency!:string
  
  constructor(private currencyService:CurrencyService){}
  
  area = [
    {
      name:'alabama',
      price: 20
    },
    {
      name:'alaska',
      price: 30
    },
    {
      name:'arizona',
      price: 50
    },
    {
      name:'california',
      price: 29
    },
    {
      name:'colorado',
      price: 80
    },
    {
      name:'florida',
      price: 90
    },
  ]

  ngOnInit(): void {
    this.currencyService.getSelectedSymbol().subscribe(symbol=>{
      this.selectedCurrency = symbol
    })
  }
  onCloseModalOusideClick(event:MouseEvent){
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('bg-modals')){
      this.onClose.emit()
    }
  }
  convertPrice(price:number){
    return this.currencyService.convertPrice(price);
   }
}
