import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input()
  studentMsg : string;

  @Input('stdLeader')
  myStdLeader : Student;

  @Output('addNumberEvent')
  addNumberEvent = new EventEmitter<number>();

  childTitle = '-- Child two --';
  addMsg = 'Add Number'
  num1 = '';
  num2 = '';

  addNumber() {
    this.addNumberEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }

}
