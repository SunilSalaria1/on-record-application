import { Component } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder) { }

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


  controlValue(event:any){
    console.log(this.otpVerificationForm.value);
    console.log(event.target.value);
  }

  //== onSubmit signInForm formBuilder
  onSubmit() {
    if (this.otpVerificationForm.valid) {
      console.warn(this.otpVerificationForm.value);
    }
    if(this.otpVerificationForm.invalid){
      this.incorrectOtpEnter = true;
    }
  }
}
