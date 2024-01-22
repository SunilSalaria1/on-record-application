import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule, RouterOutlet, RouterLink, 
    RouterLink, RouterLinkActive, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  //=== labels 
  firstName = "First Name";
  lastName = "Last Name";
  emailAddress = "Email Address";
  mobileNumber = "Mobile Number";
  dateOfBirth = "Date of Birth";
  selectGender = "Select Gender";
  selectGenderList = ['Male', 'Female', 'Others'];
  selectRole = "Select Role";
  selectRoleOptions = ['BDE', 'Backend Developer', 'Frontend Developer', 'Full Stack Developer', 'Human Resources'];
  password = "Password";
  confirmPassword = "Confirm Password";
  signUpBtn = "Sign Up";

}
