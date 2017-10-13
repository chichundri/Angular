import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('name') writerName : string;
  @Input('book') writerBook : string;


}
