import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService, private _snackBar: MatSnackBar, private route: Router) { }

  public email: string = ''
  public password: string = ''

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    this.service.loginUser({ email: loginForm.value.Email, password: loginForm.value.Password })
      .subscribe((data: any) =>{
        localStorage.setItem('token', data.access_token)
        this.route.navigateByUrl('/');
      } ,err => {
        this._snackBar.open('Invalid Credentials', 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 10000
        });
      });
  }

}
