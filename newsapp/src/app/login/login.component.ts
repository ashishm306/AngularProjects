import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService) { }

  public email: string = '';
  public password: string = '';

  ngOnInit(): void {

  }

  login() {
    this.service.login({ email: this.email, password: this.password }).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token)
    })
  }

}
