import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';
import { CurrencyService } from '../../../../core/services/currency.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,TranslatePipe,CurrencyPipe],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit{
  selectedCurrency!:string

  constructor(private currencyService:CurrencyService){}

  ngOnInit(): void {
    initFlowbite();
    this.currencyService.getSelectedSymbol().subscribe(symbol=>{
      this.selectedCurrency = symbol
    })
  }
  convertPrice(price:number){
    return this.currencyService.convertPrice(price);
   }
}
