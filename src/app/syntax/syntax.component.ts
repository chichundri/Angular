import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.css']
})
export class SyntaxComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  private name = 'World';
}