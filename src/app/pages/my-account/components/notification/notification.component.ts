import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CoreModule } from '../../../../core/core.module';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CoreModule,RouterLink,RouterLinkActive
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
