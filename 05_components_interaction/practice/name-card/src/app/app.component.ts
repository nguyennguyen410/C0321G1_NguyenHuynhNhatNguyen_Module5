import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'name-card';
  cardNameString = 'Professional Dev';
  emailString = 'prodev@codegym.vn';
  phoneString = '0123456789';
}
