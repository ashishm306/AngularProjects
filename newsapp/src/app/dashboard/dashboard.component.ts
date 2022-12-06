import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DataService) { }

  public news: any;
  ngOnInit(): void {
    this.service.getNews().subscribe((data: any) => this.news = data.articles)
  }

  AddNews(article: any) {
    this.service.addNews(article).subscribe((data: any) => console.log(data));
  }

}
