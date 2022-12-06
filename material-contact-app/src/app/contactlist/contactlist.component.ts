import { Component, OnInit } from '@angular/core';
import Contact from '../models/contact';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private service: DataService) { }

  public contacts: Array<Contact> = [];

  ngOnInit(): void {
    this.service.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  DeleteContact(id: any) {
    this.service.deleteContact(id).subscribe((data: any) => {
      this.contacts = this.contacts.filter(item => item.id !== id)
    })
  }

}