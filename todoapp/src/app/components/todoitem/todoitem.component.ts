import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  constructor() { }

  @Input()
  todoitem!: Todo;
  ngOnInit(): void {

  }

  @Output()
  deleteEvent = new EventEmitter();

  @Output()
  updateEvent = new EventEmitter();

  deleteTodoItem(id: any) {
    this.deleteEvent.emit(id);
  }

  updateTodoItem(todo: any){
    this.updateEvent.emit(todo);
  }

}
