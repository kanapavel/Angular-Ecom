import { Component, Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input()data!:products
}
