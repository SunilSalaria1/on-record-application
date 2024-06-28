import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PasswordComponent } from "../../../shared/widgets/password-widget/password/password.component";
import { SnackbarService } from '../../../shared/services/snackbar.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
    providers: [provideNgxMask()],
    imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink,
        RouterLink, RouterLinkActive, MatSelectModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, NgxMaskDirective,
        NgxMaskPipe, PasswordComponent]
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder, private snackBarService: SnackbarService) { }

  //== form labels 
  labels = {
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    mobileNumber: "Mobile Number",
    selectGender: "Select Gender",
    selectGenderList: ['Male', 'Female', 'Others'],
    signUpBtn: "Sign Up",
  }

  //== signup form form builder
  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
    selectGender: ['', Validators.required],
  });



  //== onSubmit signUpForm formBuilder
  onSubmit() {
    if (this.signUpForm.valid) {
      if (this.signUpForm.valid) {
        this.snackBarService.openSnackBar({
          message: 'Register successful',
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
