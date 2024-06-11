import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss'
})
export class OtpVerificationComponent {
  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef) { }

  //== form labels 
  labels = {
    verifyCodeBtn: "Verify Code"
  }

  //== incorrect OTP entered
  incorrectOtpEnter:boolean = false;

  //== sign in form builder
  otpVerificationForm = this.formBuilder.group({
    firstOtpControl: ['',Validators.required],
    secondOtpControl: ['',Validators.required],
    thirdOtpControl: ['',Validators.required],
    fourthOtpControl: ['',Validators.required],
    fifthOtpControl: ['',Validators.required],
    sixthOtpControl: ['',Validators.required],
  });

  //== get input elements
  get inputs() {
    return this.elementRef.nativeElement.querySelectorAll('input');
  }

  //== focus next input on input change
  onFocusNextInput(event: Event, index: number) {
    if ((event.target as HTMLInputElement).value.length === 1) {
      if (index < this.inputs.length - 1) {
        this.inputs[index + 1].focus();
      }
    }
  }

  //== focus previous input on backspace
  onFocusPreviousInput(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && (event.target as HTMLInputElement).value.length === 0) {
      if (index > 0) {
        this.inputs[index - 1].focus();
      }
    }
  }

  //== onSubmit signInForm formBuilder
  onSubmit() {
    if (this.otpVerificationForm.valid) {
      console.warn(this.otpVerificationForm.value);
      this.incorrectOtpEnter = false;
    }
    if(this.otpVerificationForm.invalid){
      this.incorrectOtpEnter = true;
    }
  }
}
