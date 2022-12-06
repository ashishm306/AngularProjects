import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private service: DataService) { }
  public errorMessage: string = '';

  public news: any;
  ngOnInit(): void {
    this.service.getFavorites().subscribe((data: any) => {
      this.news = data
      this.errorMessage = ''
    }, error => {
      this.errorMessage = error.error.message
    })

  }

}
