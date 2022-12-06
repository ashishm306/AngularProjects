import { Component, OnInit } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DataService) { }
  users?: Observable<any>;
  ngOnInit(): void {
    // this.service.getData().subscribe(data => console.log(data))
    // of(1,2,4,5).pipe(first(value => value % 2 == 0)).subscribe(data => console.log(data));
    this.users = this.service.getUsers();
  }

}
