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
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink,
    RouterLink, RouterLinkActive, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, NgxMaskDirective,
    NgxMaskPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [provideNgxMask()]
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder) { }

  //== form labels 
  labels = {
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    mobileNumber: "Mobile Number",
    selectGender: "Select Gender",
    selectGenderList: ['Male', 'Female', 'Others'],
    password: "Password",
    confirmPassword: "Confirm Password",
    signUpBtn: "Sign Up",
  }

  //== password fields visible icon default state
  passwordVisibleIcon = true;
  confirmPasswordVisibleIcon = true;

  //== validation required checks default states
  minLengthSix: boolean = false;
  containsUppercase: boolean = false;
  containsLowercase: boolean = false;
  containsArabicNumerals: boolean = false;
  containsSpecialCharacters: Boolean = false;
  defaultColorDark: boolean = false;

  //== signup form form builder
  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
    selectGender: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\-_=+{}[\\]|\\\\:;"\'<>,.?/~`])[A-Za-z\\d!@#$%^&*()\\-_=+{}[\\]|\\\\:;"\'<>,.?/~`]{6,}$')]], //password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
    confirmPassword: ['', Validators.required]
  },
    {
      validators: this.passwordMatchValidator //custom validators for password & confirm password fields
    }
  );

  //== custom validator for password a& confirm password fields
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
    if (passwordControl?.value && confirmPasswordControl?.value) {
      passwordControl?.value === confirmPasswordControl?.value ? confirmPasswordControl?.setErrors(null) : confirmPasswordControl?.setErrors({ passwordMismatch: true });
    }
  }

  //== add validation checks based on get password values
  getPasswordValue() {
    this.defaultColorDark = true;
    //for length
    this.minLengthSix = (this.signUpForm.controls['password'].value as string)?.length >= 6
    //for uppercase
    const uppercasePattern = /[A-Z]/;
    this.containsUppercase = uppercasePattern.test(this.signUpForm.controls['password'].value as string);
    //for lowercase
    const lowercasePattern = /[a-z]/;
    this.containsLowercase = lowercasePattern.test(this.signUpForm.controls['password'].value as string);
    //for number
    const arabicNumeralPattern = /\d/;
    this.containsArabicNumerals = arabicNumeralPattern.test(this.signUpForm.controls['password'].value as string);
    //for special character
    const specialCharacterPattern = /[!@#$%^&*()\-=+{}[\]|\\:;"'<>,.?/~`]/;
    this.containsSpecialCharacters = specialCharacterPattern.test(this.signUpForm.controls['password'].value as string);
  }

  //== indicator width calculator   
  get trueConditionCount() {
    return [
      this.minLengthSix,
      this.containsUppercase,
      this.containsLowercase,
      this.containsArabicNumerals,
      this.containsSpecialCharacters
    ].filter(condition => condition).length;
  }

  //== get indicator width 
  get indicatorWidth() {
    const percentagePerCondition = 100 / 5; //5 conditions
    return this.trueConditionCount * percentagePerCondition;
  }

  //== password close icon click
  passwordCloseIcon() {
    this.signUpForm.get('password')?.reset();
    this.minLengthSix = false;
    this.containsUppercase = false;
    this.containsLowercase = false;
    this.containsArabicNumerals = false;
    this.containsSpecialCharacters = false;
    this.defaultColorDark = false;
  }

  //== onSubmit signUpForm formBuilder
  onSubmit() {
    if (this.signUpForm.valid) {
      console.warn(this.signUpForm.value);
    }
  }
}
