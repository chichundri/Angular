import { Component, OnInit } from '@angular/core';
import  { Student } from '../student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//Property for child component one
  parentTitle : string = "Parent Component";
  cityMsg = 'Indian City Names';
  ctArray = ['Varanasi', 'Delhi', 'Mumbai'];
  studentAddMsg = 'Add Student';

//Property for child component two
	stdMsg = 'Student Leader Detail';
	stdLeaderObj = new Student('Narendra', 'Modi');
  stdFullName = '';
  msg = '';
  sum = '';
  saveData(std) { 
    this.stdFullName = std.fname + ' ' +std.lname;
  }

  printMsg(msg) {
    this.msg = msg;    
  }

  printSum(res){
    this.sum = res;
  }

}
