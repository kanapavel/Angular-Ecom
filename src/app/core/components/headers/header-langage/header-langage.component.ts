import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyService } from '../../../services/currency.service';


@Component({
  selector: 'app-header-langage',
  standalone: true,
  imports: [TitleCasePipe,CommonModule,TranslatePipe,NgFor],
  templateUrl: './header-langage.component.html',
  styleUrl: './header-langage.component.css'
})
export class HeaderLangageComponent implements OnInit {
  userLanguage!:string;
  suppotedLanguage:string[]=[];
  currencies:string[] = []
  
  english: string = "english";
  chinese: string = "chinese";
  swahili: string = "swahili";
  french: string = "french";
  text: string = "Super Value Deals - Save more with coupons"

  constructor(private languageService:LanguageService,private currencyService:CurrencyService){ 
    this.suppotedLanguage = this.languageService.getAviableLanguages()
  }

  ngOnInit(): void {
    this.userLanguage = this.languageService.getUserLanguage()
    this.currencies = this.currencyService.getCurrencyAvailable()
  }
  onChangeLanguage(language:string):void{
    this.languageService.setLanguage(language)
    this.userLanguage = language
  }

  onChangeCurrency(event:Event):void{
    const selectedElement = event.target as HTMLSelectElement;
    const currency = selectedElement.value;
    if(currency){
      this.currencyService.selectCurrency(currency);
    }
  }

}
