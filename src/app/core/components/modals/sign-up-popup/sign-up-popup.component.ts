import { Component, Input, Output,EventEmitter } from '@angular/core';
import{CommonModule, NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up-popup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgIf],
  templateUrl: './sign-up-popup.component.html',
  styleUrl: './sign-up-popup.component.css'
})
export class SignUpPopupComponent {

  @Input('showSignUpModal')
  showSignUpModal = false;

  @Output('close')
  onClose = new EventEmitter()

  applyForms: FormGroup;

  constructor(){
    this.applyForms = new FormGroup({
      firstName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])/)])
    });
  }
  
  onCloseModal(event:MouseEvent){
    const targetElement = event.target as HTMLElement;
    if(targetElement.classList.contains('bg-modals')){
      this.onClose.emit();
    }
  }
  onSubmit(){
    this.applyForms.markAllAsTouched();
    if(this.applyForms.valid){
      console.log(this.applyForms.value)
    }
  }
}
