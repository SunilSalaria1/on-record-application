import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string = 'Close', duration: number = 3000) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
