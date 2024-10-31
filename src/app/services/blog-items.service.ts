import { Injectable } from '@angular/core';
import { blogItem } from '../interfaces/blogItem';

@Injectable({
  providedIn: 'root'
})
export class BlogItemsService {

  constructor() { }
  blogItems:blogItem[]=[
    {
      id:1,
      img:'assets/img-blog/blog-img-1.jpg',
      info:'Recipes',
      title:'Harissa Chickpeas with Whipped Feta',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'16 April 2023',
      time:'9min'
    },
    {
      id:2,
      img:'assets/img-blog/blog-img-2.jpg',
      info:'Recipes',
      title:'Almond Butter Chocolate Chip Zucchini Bars',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'20 April 2023',
      time:'8min'
    },
    {
      id:3,
      img:'assets/img-blog/blog-img-1.jpg',
      info:'Company',
      title:'Spicy Shrimp Tacos Garlic Cilantro Lime Slaw',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'18 April 2023',
      time:'5min'
    },
    {
      id:4,
      img:'assets/img-blog/blog-img-4.jpg',
      info:'Recipes',
      title:'Red Chile Chicken Tacos with Creamy Corn',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'16 April 2023',
      time:'9min'
    },
    {
      id:5,
      img:'assets/img-blog/blog-img-5.jpg',
      info:'Retailer',
      title:'Basic + Awesome Broccoli Cheese Soup',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'12 April 2023',
      time:'12min'
    },
    {
      id:6,
      img:'assets/img-blog/blog-img-6.jpg',
      info:'Recipes',
      title:'No-Boil Baked Penne with Meatballs',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'14 April 2023',
      time:'6min'
    },
    {
      id:7,
      img:'assets/img-blog/blog-img-7.jpg',
      info:'Recipes',
      title:'Red Chile Chicken Tacos with Creamy Corn',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'16 April 2023',
      time:'9min'
    },
    {
      id:8,
      img:'assets/img-blog/blog-img-8.jpg',
      info:'Retailer',
      title:'Basic + Awesome Broccoli Cheese Soup',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'12 April 2023',
      time:'12min'
    },
    {
      id:9,
      img:'assets/img-blog/blog-img-9.jpg',
      info:'Recipes',
      title:'No-Boil Baked Penne with Meatballs',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit amet tincidunt ellentesque aliquet ligula in ultrices congue.',
      date:'14 April 2023',
      time:'6min'
    },
  ]

  getAllBlogItems(){
    return this.blogItems;
  }
}
