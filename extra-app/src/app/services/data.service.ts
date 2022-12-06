import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public username = new BehaviorSubject<string>('Guest');
  constructor(private http: HttpClient) { }

  getData() {
    let res1 = this.http.get('https://jsonplaceholder.typicode.com/users')
    let res2 = this.http.get('https://jsonplaceholder.typicode.com/posts')
    let res3 = this.http.get('https://jsonplaceholder.typicode.com/todos')

    return forkJoin([res1, res2, res3]);
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
