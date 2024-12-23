import { Component, Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';
import { DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { RatingModule } from 'primeng/rating'
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgFor,DatePipe,RatingModule,FormsModule,TitleCasePipe,TranslatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input()data!:products
  constructor(){}
}
