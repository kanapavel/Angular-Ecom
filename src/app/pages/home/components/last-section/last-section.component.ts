import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-last-section',
  standalone: true,
  imports: [NgFor,TranslatePipe],
  templateUrl: './last-section.component.html',
  styleUrl: './last-section.component.css'
})
export class LastSectionComponent {
  constructor(){}


  items=[
    {
      img:'assets/clock.png',
      title:'10 minute grocery now',
      description:'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.'
    },
    {
      img:'assets/gift.png',
      title:'Best Prices & Offers',
      description:'Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.'
    },
    {
      img:'assets/box.png',
      title:'Wide Assortment',
      description:'Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.'
    },
    {
      img:'assets/circular-arrow.png',
      title:'Easy Returns',
      description:'Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .'
    },
  ]
}
