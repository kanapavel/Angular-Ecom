import { Component } from '@angular/core';
import { HeaderLangageComponent } from '../../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../../common/headers/navbar-two/navbar-two.component';
import { FooterComponent } from '../../common/footer/footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderLangageComponent,NavbarOneComponent,NavbarTwoComponent,FooterComponent,NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  data = [
    {
      img:'assets/img-about-us/about-icons-1.svg',
      title:'Grow my business with Freshcart',
      description:'Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.',
      boutton:'FreshCart Platform'
    },
    {
      img:'assets/img-about-us/about-icons-2.svg',
      title:'Advertise my brand on Freshcart',
      description:'Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.',
      boutton:'FreshCart ads'
    },
    {
      img:'assets/img-about-us/about-icons-3.svg',
      title:'Learn more about Freshcart',
      description:'Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.',
      boutton:'Learn More'
    },
  ]

  personnel = [
    {
      name:'Marta White',
      post:'Chief Technology Officer',
      img:'assets/img-about-us/team-4.png',
    },
    {
      name:'Daniel Leedom',
      post:'Chief Communication Officer',
      img:'assets/img-about-us/team-3.png',
    },
    {
      name:'Chris Rogers',
      post:'Vice President,Retail',
      img:'assets/img-about-us/team-1.png',
    },
    {
      name:'Donna J.Shelton',
      post:'Chief Financial Officer',
      img:'assets/img-about-us/team-2.png',
    },
    {
      name:'Victor Pugliese',
      post:'Chief Human Ressources Officer',
      img:'assets/img-about-us/team-5.png',
    },
  ]
}
