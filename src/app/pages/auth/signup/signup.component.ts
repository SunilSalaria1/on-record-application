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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink,
    RouterLink, RouterLinkActive, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder) { }

  //== labels 
  firstName = "First Name";
  lastName = "Last Name";
  emailAddress = "Email Address";
  mobileNumber = "Mobile Number";
  selectGender = "Select Gender";
  selectGenderList = ['Male', 'Female', 'Others'];
  password = "Password";
  confirmPassword = "Confirm Password";
  signUpBtn = "Sign Up";

  //== signup formBuilder
  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', Validators.required],
    selectGender: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  //== password visible icon 
  passwordVisibleIcon = true;
  confirmPasswordVisibleIcon = true;

  //== onSubmit signup formBuilder
  onSubmit() {
    if (this.signUpForm.valid) {
      console.warn(this.signUpForm.value);
    }

  }
}
