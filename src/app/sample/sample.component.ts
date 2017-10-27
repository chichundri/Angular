import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {}
  
  test : string = "tessstt";
  objDate = Date.now();
  
  fontSize : number = 20;
  name :string = "Angular";
  
  

}
