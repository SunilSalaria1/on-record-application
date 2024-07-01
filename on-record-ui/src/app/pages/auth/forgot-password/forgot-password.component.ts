import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarService } from '../../../shared/services/snackbar.service';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink, RouterLinkActive, MatSnackBarModule, SnackbarComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(private formBuilder: FormBuilder, private snackBarService: SnackbarService) { }

  //== form labels 
  labels = {
    emailAddress: "Email Address",
    sendCodeBtn: "Send Code"
  }

  //== sign in form builder
  forgotPasswordForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]]
  });

  //== onSubmit signInForm formBuilder
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      if (this.forgotPasswordForm.valid) {
        this.snackBarService.openSnackBar({
          message: 'Email sent successfully',
          panelClass: 'snackbar-success'          
        });
      } else {
        this.snackBarService.openSnackBar({
          message: 'Something went wrong',
          panelClass: 'snackbar-danger'                 
        });
      }
    }
  }
}
