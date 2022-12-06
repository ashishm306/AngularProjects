import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: DataService) { }
  users: any;
  ngOnInit(): void {
    this.service.getUsers().subscribe((userData: any) => this.users = userData.data);
  }



}
