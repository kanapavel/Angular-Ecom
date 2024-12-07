import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-two',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,TranslatePipe],
  templateUrl: './navbar-two.component.html',
  styleUrl: './navbar-two.component.css'
})
export class NavbarTwoComponent {

}
