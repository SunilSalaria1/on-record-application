import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink, RouterLinkActive, MatSnackBarModule, SnackbarComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor() {} 
}
