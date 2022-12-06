import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Contact from '../models/contact';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private service: DataService, private _snackBar: MatSnackBar) { }
  public contact = new Contact();
  public heading = "Add New Contact";
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.addContact(form.value).subscribe(data => {
        this._snackBar.open('New Contact Added Successfully', 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000
        });
      });
    }
  }

  

}
