import { Component } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [MatSnackBarModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar) {}
  snackbarMessage = "Snack bar working successfully";
  openSnackBar() {
    this._snackBar.open(this.snackbarMessage, "Close", {
      duration: 5 * 1000,
      horizontalPosition: "center",
      verticalPosition : "top"
    });
  }
}
