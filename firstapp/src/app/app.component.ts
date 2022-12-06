import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  username = 'Dhiraj';

  brand: String = '';

  ShowData(value: String) {
    this.brand = value;
  }

}
