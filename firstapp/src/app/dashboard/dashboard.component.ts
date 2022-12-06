import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  // myStyle = {
  //   color: 'red',
  //   'font-family': 'Arial'
  // }

  countries: Array<string> = ['India', 'Australia', 'China', 'England', 'Russia', 'Japan'];
  persons: Array<any> = [
    {
      fname: 'Peter',
      lname: 'Parker',
      email: 'Peter@gmail.com'
    },
    {
      fname: 'Tony',
      lname: 'Stark',
      email: 'Tony@gmail.com'
    },
    {
      fname: 'Steven',
      lname: 'Strange',
      email: 'Steven@gmail.com'
    },
  ]

  isVisible: boolean = true;

  ngOnInit(): void {
  }

}
