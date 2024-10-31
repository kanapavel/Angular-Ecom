import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,FooterComponent,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  applyForms: FormGroup;

  constructor(){
    this.applyForms = new FormGroup({
      firstname : new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname : new FormControl('',[Validators.required,Validators.minLength(3)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])/)])
    });
  }
  
  onSubmit(){
    this.applyForms.markAllAsTouched();
    if(this.applyForms.valid){
      console.log(this.applyForms.value)
    }
  }
}
