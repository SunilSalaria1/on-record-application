import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatNativeDateModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  constructor(private formBuilder: FormBuilder) { }

  //== form labels 
  labels = {
    password: "Password",
    confirmPassword: "Confirm Password"
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
  passwordForm = this.formBuilder.group({
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
    this.minLengthSix = (this.passwordForm.controls['password'].value as string)?.length >= 6
    //for uppercase
    const uppercasePattern = /[A-Z]/;
    this.containsUppercase = uppercasePattern.test(this.passwordForm.controls['password'].value as string);
    //for lowercase
    const lowercasePattern = /[a-z]/;
    this.containsLowercase = lowercasePattern.test(this.passwordForm.controls['password'].value as string);
    //for number
    const arabicNumeralPattern = /\d/;
    this.containsArabicNumerals = arabicNumeralPattern.test(this.passwordForm.controls['password'].value as string);
    //for special character
    const specialCharacterPattern = /[!@#$%^&*()\-=+{}[\]|\\:;"'<>,.?/~`]/;
    this.containsSpecialCharacters = specialCharacterPattern.test(this.passwordForm.controls['password'].value as string);
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
    this.passwordForm.get('password')?.reset();
    this.minLengthSix = false;
    this.containsUppercase = false;
    this.containsLowercase = false;
    this.containsArabicNumerals = false;
    this.containsSpecialCharacters = false;
    this.defaultColorDark = false;
  }
}
