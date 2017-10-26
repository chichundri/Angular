import { Component, OnInit,Input } from '@angular/core';
import { MyPost } from '../my-post';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit,MyPost {
  constructor() { }
  ngOnInit() {}

  @Input() post: any;
}
