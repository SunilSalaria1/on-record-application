import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatDividerModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private location: Location) { }

   //== labels 
    goBackBtn = "Go Back";
    ErrorTitle = "Opps! Page not Found.";
    ErrorDescription = "The requested URL was not found on this server. The page you are looking for might have been removed, had its name changed or it's temporarily unavailable.";
   
 

  //== go back btn
  goBack(): void {
    this.location.back();
  }
}
