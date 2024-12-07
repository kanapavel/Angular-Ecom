import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header-langage',
  standalone: true,
  imports: [TitleCasePipe,CommonModule,TranslatePipe],
  templateUrl: './header-langage.component.html',
  styleUrl: './header-langage.component.css'
})
export class HeaderLangageComponent implements OnInit {
  userLanguage!:string;
  suppotedLanguage:string[]=[];

  constructor(private languageService:LanguageService){ 
    this.suppotedLanguage = this.languageService.getAviableLanguages()
  }

  ngOnInit(): void {
    this.userLanguage = this.languageService.getUserLanguage()
  }
  changeLanguage(language:string){
    this.languageService.setLanguage(language)
    this.userLanguage = language
  }

  english: string = "english";
  chinese: string = "chinese";
  swahili: string = "swahili";
  french: string = "french";
  text: string = "Super Value Deals - Save more with coupons"
}
