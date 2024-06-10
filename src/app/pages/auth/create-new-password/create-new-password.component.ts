import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PasswordComponent } from "../../../shared/widgets/password-widget/password/password.component";

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, PasswordComponent],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss'
})
export class CreateNewPasswordComponent {

}
