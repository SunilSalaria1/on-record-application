import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss'
})
export class OtpVerificationComponent {

}
