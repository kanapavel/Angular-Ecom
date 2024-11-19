import { Component, Input, signal } from '@angular/core';
import{MatTabsModule} from '@angular/material/tabs'
import { products } from '../../../../core/interfaces/products';
import { InformationsComponent } from '../informations/informations.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule,InformationsComponent,ReviewsComponent,DetailsComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() data!:products
  selectTabIndex = signal(0)
  constructor(){}
}
