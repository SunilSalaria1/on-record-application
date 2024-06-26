import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

interface SnackbarConfig {
  message: string;
  duration?: number;
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
  backgroundColor?: string;
  textColor?: string;
  panelClass?: string | string[];
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(config: SnackbarConfig) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: config.message,
        backgroundColor: config.backgroundColor || 'defaultBgColor',
        textColor: config.textColor || 'defaultTextColor'
      },
      duration: config.duration || 500000,
      horizontalPosition: config.horizontalPosition || 'center',
      verticalPosition: config.verticalPosition || 'top',
      panelClass: config.panelClass || 'snackbar-default',
    });
  }
}
