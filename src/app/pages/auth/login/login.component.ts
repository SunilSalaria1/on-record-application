import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private snackBarService: SnackbarService) { }

  //== form labels 
  labels = {
    emailAddress: "Email Address",
    password: "Password",
    signInBtn: "Sign In",
    loginWithGoogle: "Continue with Google",
    loginWithMobile: "Continue with mobile OTP"
  }

  //== password fields visible icon default state
  passwordVisibleIcon = true;

  //== sign in form builder
  signInForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  //== onSubmit signInForm formBuilder
  onSubmit() {
    if (this.signInForm.valid) {
      if (this.signInForm.controls.emailAddress.value === 'test@example.com' && this.signInForm.controls.password.value === '123') {
        this.snackBarService.openSnackBar({
          message: 'Login successful',
          panelClass: 'snackbar-success',
           icon: 'success'

        });
      } else {
        this.snackBarService.openSnackBar({
          message: 'Login failed due to incorrect email or password',
          panelClass: 'snackbar-danger',
          icon: 'danger',
          duration:10000
        });
      }
    }
  }
}
