import { Component, ElementRef, Input, OnInit, viewChild } from '@angular/core';
import { products } from '../../../../core/interfaces/products';
import { CommentsComponent } from '../comments/comments.component';
import { RatingModule } from 'primeng/rating';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommentsComponent,RatingModule,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
  @Input()item!:products
  applyForm!:FormGroup
  nbre_commentaires = [0,0,0,0,0];
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

  chart = viewChild.required<ElementRef>('chart');
  
  ngOnInit(): void {
    // Vérifier si item est défini
  if (this.item && this.item.commentaires) {
    for (const comment of this.item.commentaires) {
      this.nbre_commentaires[comment.nbre_etoile - 1]++;
    }
    console.log(this.nbre_commentaires); // Vérifiez les données ici
  } else {
    console.warn('L\'item ou ses commentaires ne sont pas définis.');
  }

    new Chart(this.chart().nativeElement,{
      type:'bar',
      data:{
        labels:['5','4','3','2','1'],
        datasets:[
          {
            label:'Avis sur le produit',
            data:this.nbre_commentaires.reverse(),
            backgroundColor: 'rgba(255, 238, 0, 1)', // Utilisez backgroundColor au lieu de fill
            borderColor: 'rgba(255, 238, 0, 1)',
            borderWidth: 1
          },
        ],
      },
      options:{
        indexAxis:'y',
        maintainAspectRatio:true,
        elements:{
          line:{
            tension:0.4
          },
        },
      },
    })
  }

  
}
