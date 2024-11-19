import { Component,Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css'
})
export class InformationsComponent {
  @Input()data!:products
}
