import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
