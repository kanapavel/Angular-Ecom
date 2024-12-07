import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [RouterLink, RouterModule,TranslatePipe],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {

}
