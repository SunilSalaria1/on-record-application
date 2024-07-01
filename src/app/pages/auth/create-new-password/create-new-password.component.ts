import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PasswordComponent } from "../../../shared/widgets/password-widget/password/password.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarService } from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, PasswordComponent, ReactiveFormsModule],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.scss'
})
export class CreateNewPasswordComponent {
  constructor(private formBuilder: FormBuilder, private snackBarService: SnackbarService) { }
  //== form labels 
  labels = {
    createPassword: "Create Password",
  }
  //== createNewPassword form form builder
  createNewPassword = this.formBuilder.group({

  });

  //== onSubmit createNewPassword formBuilder
  onSubmit() {
    if (this.createNewPassword.valid) {
      if (this.createNewPassword.valid) {
        this.snackBarService.openSnackBar({
          message: 'Change password successfully',
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
