import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ng-template-ngfor.component.html',
  styleUrls: ['./ng-template-ngfor.component.css']
})
export class NgTemplateNgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allPersons = [
    {name : 'Ram',age:'24'},
    {name : 'Sham',age:'25'},
    {name : 'Tom',age:'26'}
  ]

}
