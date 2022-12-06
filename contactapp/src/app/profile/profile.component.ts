import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: DataService) { }

  profile: any;

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.service.getProfile(id).subscribe(data => {
      this.profile = data
    });
  }

}
