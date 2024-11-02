import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header-langage',
  standalone: true,
  imports: [TitleCasePipe,CommonModule],
  templateUrl: './header-langage.component.html',
  styleUrl: './header-langage.component.css'
})
export class HeaderLangageComponent {
  anglais: string = "english";
  allemand: string = "deutsch";
  text: string = "Super Value Deals - Save more with coupons"
}
