import { Injectable } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar:MatSnackBar) { }

  showSuccess(messages:string):void{
    this.snackBar.open(messages, 'close',{
      duration: 3000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      panelClass:'success-snackbar'
    })
  }

  showError(messages:string):void{
    this.snackBar.open(messages, 'close',{
      duration: 3000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      panelClass:'error-snackbar'
    })
  }
}
