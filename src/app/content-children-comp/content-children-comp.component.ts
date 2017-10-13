import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-app',
  templateUrl: './content-children-comp.component.html',
  styleUrls: ['./content-children-comp.component.css']
})
export class ContentChildrenCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shoulShow = false;

  show() {
    this.shoulShow = true;
    console.log("show called");
    
  }

}
