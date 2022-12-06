import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: DataService, private route: ActivatedRoute) { }

  public username?: string;
  ngOnInit(): void {
    this.service.username.subscribe(data => this.username = data)
    this.route.fragment.subscribe((data: any) => {
      document.getElementById(data)?.scrollIntoView({ behavior: 'smooth' })
    });

  }

}
