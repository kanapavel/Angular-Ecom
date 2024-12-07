import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { CoreModule } from '../../../../core/core.module';
import { initFlowbite } from 'flowbite';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-account',
  standalone: true,
  imports: [RouterModule,AsideComponent,RouterOutlet,CoreModule,TranslatePipe],
  templateUrl: './main-account.component.html',
  styleUrl: './main-account.component.css'
})
export class MainAccountComponent{
  constructor(){}
} 
