import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './featured-section.component.html',
  styleUrl: './featured-section.component.css'
})
export class FeaturedSectionComponent {
  
  constructor(){}

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
