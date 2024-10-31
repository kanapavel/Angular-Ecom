import { Component,inject } from '@angular/core';
import { HeaderLangageComponent } from '../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../common/headers/navbar-two/navbar-two.component';
import { FooterComponent } from '../common/footer/footer/footer.component';
import { BlogItemsService } from '../../services/blog-items.service';
import { blogItem } from '../../interfaces/blogItem';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderLangageComponent,NavbarOneComponent,
    NavbarTwoComponent,FooterComponent,NgFor
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogItems:blogItem[] = [];
  blogService:BlogItemsService = inject(BlogItemsService);

  constructor(){
    this.blogItems = this.blogService.getAllBlogItems();
  }
}
