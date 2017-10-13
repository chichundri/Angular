import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.css']
})
export class Cp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAllBook = false;
  onShowAllBooks() {
    this.showAllBook = (this.showAllBook === true)? false : true;
  }
}
