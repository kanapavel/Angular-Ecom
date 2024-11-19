import { Component } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

}
