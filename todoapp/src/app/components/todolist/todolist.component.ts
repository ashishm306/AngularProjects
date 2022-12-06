import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {

  }
  @Input()
  todoData: any;

  @Output()
  deleteItemEvent = new EventEmitter();

  @Output()
  updateItemEvent = new EventEmitter();

  deleteItem(id: any){
    this.deleteItemEvent.emit(id);
  }

  updateItem(item: any){
    this.updateItemEvent.emit(item);
  }

}
