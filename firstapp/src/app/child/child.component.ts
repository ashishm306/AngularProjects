import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input()
  parentData: string = '';

  @Output()
  myevent = new EventEmitter();

  passData(){
    this.myevent.emit('Stackroute');
  }

  ngOnInit(): void {
  }

}
