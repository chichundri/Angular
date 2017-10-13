import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  childTitle : string = '---Child One---';
  @Input() 
  ctMsg : string;
  
  @Input('ctArray') 
  myctArray : Array<string>;
  
  @Input('studentAddMsg') 
  addMsg : string;

  @Output('addStudentEvent') 
  addStdEvent = new EventEmitter<Student>();

  @Output('sendMsgEvent') 
  sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  message : string = 'Send Message';
  msg : string;

  addStudent() {
    this.addStdEvent.emit(this.student)
  }

  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }
}
