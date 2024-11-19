import { Component, Input } from '@angular/core';
import { products } from '../../../../core/interfaces/products';
import { CommentsComponent } from '../comments/comments.component';
import { RatingModule } from 'primeng/rating';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommentsComponent,RatingModule,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input()item!:products
  applyForm!:FormGroup

  constructor(){
    this.applyForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      file: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    this.applyForm.markAllAsTouched();
    if(this.applyForm.valid){
      console.log(this.applyForm.value)
    }
  }
}
