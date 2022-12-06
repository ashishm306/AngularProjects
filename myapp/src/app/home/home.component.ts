import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DataService) { }

  result: number = 0;
  users: Array<any> = [];

  ngOnInit(): void {
    this.result = this.service.Factorial(5);
    this.service.getUsers().subscribe(data => this.users = data);
  }

}
