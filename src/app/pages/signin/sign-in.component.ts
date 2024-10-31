import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../common/footer/footer/footer.component';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,FooterComponent,NgIf,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  applyForms!: FormGroup;
  constructor(){
    this.applyForms = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])/)])
    })
  }

  onSubmit(){
    this.applyForms.markAllAsTouched();
    if(this.applyForms.valid){
      console.log(this.applyForms.value)
    }
  }
}
