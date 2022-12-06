import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  firstname: string = 'Dhiraj';
  person: any = {
    fname: 'Peter',
    lname: 'Parker',
    email: 'Peter@gmail.com',
    city: 'New Delhi'
  }

  isDisabled: boolean = true;
  isError: boolean = true;

  username: String = '';

  errorStyle = {
    color: 'red',
    'font-style': 'italic',
    textDecoration: 'underline'
  }

  successStyle = {
    color: 'green',
    fontStyle: 'bold'
  }

  classStyle = {
    'text-danger': this.isError,
    'fst-italic': this.isError
  }

  Show() {
    console.log('Event Fired !');
  }

  ngOnInit(): void {
  }

}
