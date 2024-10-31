import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-two',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './navbar-two.component.html',
  styleUrl: './navbar-two.component.css'
})
export class NavbarTwoComponent {

}
