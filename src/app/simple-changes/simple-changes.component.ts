import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-simple-changes',
  templateUrl: './simple-changes.component.html',
  styleUrls: ['./simple-changes.component.css']
})
export class SimpleChangesComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  emp = new Employee('Gokul',20);
  msg : string = 'Hello world!';

  onFormSubmit(empForm : NgForm) {
    let name = empForm.controls['name'].value;
    let age = empForm.controls['age'].value;
    this.emp = new Employee(name, age);
  }
}
