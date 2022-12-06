import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import Contact from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: DataService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  public updateForm = this.fb.group({
    FirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,10}')]],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    City: ['', Validators.required],
    Age: ['', Validators.required],
    Phone: ['', Validators.required],
  });

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getContact(id).subscribe((data: any) => {
      this.updateForm.setValue({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Age: data.Age,
        City: data.City,
        Phone: data.Phone
      })
    })
  }

  onSubmit() {
    let id = this.route.snapshot.params['id'];
    this.service.updateContact(this.updateForm.value, id).subscribe(data => {
      this._snackBar.open('Contact Updated Successfully', 'Close', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }

  get FirstName() { return this.updateForm.get('FirstName') }
  get LastName() { return this.updateForm.get('LastName') }
  get Email() { return this.updateForm.get('Email') }
  get City() { return this.updateForm.get('City') }
  get Age() { return this.updateForm.get('Age') }
  get Phone() { return this.updateForm.get('Phone') }

}