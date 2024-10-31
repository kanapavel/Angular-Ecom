import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './featured-section.component.html',
  styleUrl: './featured-section.component.css'
})
export class FeaturedSectionComponent {
  data = [
    {
      img:'assets/home-img/grocery-banner.png',
      title:'Fruits & Vegetables',
      taux:'30%'
    },
    {
      img:'assets/home-img/grocery-banner-2.jpg',
      title:'Freshly Baked Buns',
      taux:'25%'
    }
  ]
}
