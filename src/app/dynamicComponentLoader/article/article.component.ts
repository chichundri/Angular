import { Component, OnInit, Input } from '@angular/core';
import {MyPost } from '../my-post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit,MyPost {
  constructor() { }
  ngOnInit() { }
  
  @Input() post: any;
}
