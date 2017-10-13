import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Team } from '../team';
import { TeamManagementService } from '../services/team-management.service';
import { Department } from '../department';
import { Employee } from '../employee';


@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,
              private teamMngService: TeamManagementService) { }

  ngOnInit() { 
    this.allSkills = this.teamMngService.getSkills();
    this.createTeamForm();
    this.addEmployee();
  }

  teamForm:FormGroup;
  formSubmitted = false;
  allSkills: Observable<any[]>

  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      teamName : ['',Validators.required],
      teamManager : '',
      teamDept : this.formBuilder.group(new Department()),
      employees : this.formBuilder.array([])
    })
  }

  addEmployee() {
    let fg = this.formBuilder.control(new Employee());
     this.empFormArray.push(fg);
  }

  get empFormArray(): FormArray {
	  return this.teamForm.get('employees') as FormArray;
  }

  deleteEmployee(idx : number){
    this.empFormArray.removeAt(idx);
  }

  loadTeam(name : string) {
    this.teamMngService.getTeamByName(name).subscribe(team => this.createTeamWithDefaultData(team));
  }

  createTeamWithDefaultData(team : Team) {
    // this.teamForm.patchValue(team);
    this.teamForm.patchValue({
      teamName : team.teamName,
      teamDept : team.teamDept,
      teamManager : team.teamManager
    });
    let employeeFormGroup = team.employees.map(employee => this.formBuilder.group(employee));
    let employeeFormArray = this.formBuilder.array(employeeFormGroup);
    this.teamForm.setControl('employees',employeeFormArray);
  }

  onFormSubmit() {
    let data = JSON.stringify(this.teamForm.value);
    console.log('-----Team in JSON Format-----');
    console.log(data);
    let team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.formSubmitted = true;
    this.teamForm.reset();
  }

  resetTeamForm() {
	  this.teamForm.reset({
		  teamName: 'Java Team',
		  teamManager: 'Yogi'
	  });
  }
}
