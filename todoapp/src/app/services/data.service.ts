import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addTodo(todoitem: Todo) {
    return this.http.post(environment.apiUrl, todoitem)
  }

  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(environment.apiUrl);
  }

  deleteTodo(id: any) {
    return this.http.delete(`${environment.apiUrl}/${id}`)
  }

  updateTodo(todo: Todo) {
    return this.http.put(`${environment.apiUrl}/${todo.id}`, todo);
  }
}
