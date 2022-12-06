import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contact from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public currDate = new Date();

  @Input()
  contactData: Array<any> = [];

  @Output()
  delEvent = new EventEmitter();

  ngOnInit(): void {
  }

  DeleteContact(id: any){
    this.delEvent.emit(id);
  }

}
