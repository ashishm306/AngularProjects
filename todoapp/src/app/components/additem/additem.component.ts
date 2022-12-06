import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private service: DataService) { }
  todoitem: string = '';

  @Output()
  addEvent = new EventEmitter();


  ngOnInit(): void {
  }

  AddItem() {
    let item: Todo = { id: uuidv4(), todo: this.todoitem, isCompleted: false }
    this.service.addTodo(item).subscribe((data: any) => {
      this.addEvent.emit(data);
    });
  }

}
