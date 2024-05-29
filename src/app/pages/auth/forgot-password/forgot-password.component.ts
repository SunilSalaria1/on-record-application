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
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink, RouterLinkActive, MatSnackBarModule, SnackbarComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(private formBuilder: FormBuilder) { }

  //== form labels 
  labels = {
    emailAddress: "Email Address"   
  }

  //== sign in form builder
  forgotPasswordForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]]
  });

  //== onSubmit signInForm formBuilder
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.warn(this.forgotPasswordForm.value);
    }
  }
}
