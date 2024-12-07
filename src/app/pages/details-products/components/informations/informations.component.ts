import { Component,Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css'
})
export class InformationsComponent {
  @Input()data!:products
}
