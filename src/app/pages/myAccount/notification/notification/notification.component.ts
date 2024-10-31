import { Component } from '@angular/core';
import { HeaderLangageComponent } from '../../../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../../../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../../../common/headers/navbar-two/navbar-two.component';
import { FooterComponent } from '../../../common/footer/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [HeaderLangageComponent,NavbarOneComponent,NavbarTwoComponent,
    FooterComponent,RouterLink,RouterLinkActive
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
