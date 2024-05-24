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
import { CommonModule, UpperCasePipe } from '@angular/common';
import { BlockList } from 'net';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink,
    RouterLink, RouterLinkActive, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
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
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    selectGender: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\-_=+{}[\\]|\\\\:;"\'<>,.?/~`])[A-Za-z\\d!@#$%^&*()\\-_=+{}[\\]|\\\\:;"\'<>,.?/~`]{6,}$')]], //Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
    confirmPassword: ['', Validators.required]
  });

  //== password visible icon 
  passwordVisibleIcon = true;
  confirmPasswordVisibleIcon = true;

  //validation required checks
  minLengthSix: boolean = false;
  containsUppercase: boolean = false;
  containsLowercase: boolean = false;
  containsArabicNumerals: boolean = false;
  containsSpecialCharacters: Boolean = false;
  defaultColorDark: boolean = false;

  test() {
    this.defaultColorDark = true; // Mark as touched when test function is called
    //for length
    console.log(this.signUpForm.controls.password.value);
    this.minLengthSix = (this.signUpForm.controls.password.value as string)?.length >= 6
    //for uppercase
    const uppercasePattern = /[A-Z]/;
    this.containsUppercase = uppercasePattern.test(this.signUpForm.controls.password.value as string);
    //for lowercase
    const lowercasePattern = /[a-z]/;
    this.containsLowercase = lowercasePattern.test(this.signUpForm.controls.password.value as string);

    //number
    const arabicNumeralPattern = /\d/;
    this.containsArabicNumerals = arabicNumeralPattern.test(this.signUpForm.controls.password.value as string);
    //special character
    const specialCharacterPattern = /[!@#$%^&*()\-=+{}[\]|\\:;"'<>,.?/~`]/;
    this.containsSpecialCharacters = specialCharacterPattern.test(this.signUpForm.controls.password.value as string);
  }

  //indicator width calculator   
  get trueConditionCount() {
    return [
      this.minLengthSix,
      this.containsUppercase,
      this.containsLowercase,
      this.containsArabicNumerals,
      this.containsSpecialCharacters
    ].filter(condition => condition).length;
  }

  get indicatorWidth() {
    const percentagePerCondition = 100 / 5; // 5 conditions
    return this.trueConditionCount * percentagePerCondition;
  }

  //== password close icon click
  passwordClose() {
    this.signUpForm.get('password')?.reset();
    this.minLengthSix = false;
    this.containsUppercase = false;
    this.containsLowercase = false;
    this.containsArabicNumerals = false;
    this.containsSpecialCharacters = false;
    this.defaultColorDark = false;
  }

  //== onSubmit signup formBuilder
  onSubmit() {
    if (this.signUpForm.valid) {
      console.warn(this.signUpForm.value);
    }
  }
}
