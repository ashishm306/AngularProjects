import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { 
    this.cd.detach();
  }

  ngOnInit(): void {
  }

  child() {
    console.log('Child Component Loaded');
  }

}
