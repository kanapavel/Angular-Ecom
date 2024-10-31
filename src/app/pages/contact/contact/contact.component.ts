import { Component } from '@angular/core';
import { HeaderLangageComponent } from '../../common/headers/header-langage/header-langage.component';
import { NavbarOneComponent } from '../../common/headers/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from '../../common/headers/navbar-two/navbar-two.component';
import { FooterComponent } from '../../common/footer/footer/footer.component';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderLangageComponent,FooterComponent,NavbarOneComponent,
    NavbarTwoComponent,ReactiveFormsModule,NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  applyForms!: FormGroup;
  constructor(){
    this.applyForms = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      company: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl('',[Validators.required,Validators.minLength(9)]),
      textarea: new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    this.applyForms.markAllAsTouched();
    if(this.applyForms.valid){
      console.log(this.applyForms.value)
    }
  }
}
