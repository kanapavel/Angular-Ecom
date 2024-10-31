import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer/footer.component';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-pwd',
  standalone: true,
  imports: [FooterComponent,NgIf,FooterComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './forgot-pwd.component.html',
  styleUrl: './forgot-pwd.component.css'
})
export class ForgotPwdComponent {
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
