import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private service: DataService) { }
  title = 'todoapp';

  todos: Array<Todo> = [];

  getTodoItem(item: any) {
    this.todos.push(item);
  }

  deleteTodoItem(id: any) {
    this.service.deleteTodo(id).subscribe((data: any) => {
      this.todos = this.todos.filter(item => item.id !== id);
    })
  }

  updateTodoItem(item: any) {
    item.isCompleted === true ? item.isCompleted = false : item.isCompleted = true;
    this.service.updateTodo(item).subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
    this.service.getTodos().subscribe(data => this.todos = data)
  }
}
