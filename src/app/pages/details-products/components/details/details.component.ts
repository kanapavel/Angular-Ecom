import { Component, Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input()data!:products
}
