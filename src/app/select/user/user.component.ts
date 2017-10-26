import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Profile } from '../profile';
import { Technology } from '../technology';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService : UserServiceService) { }
  debugger;
  isValidFormSubmitted : boolean = false;
  allProfiles : Profile[];
  allTechnologies : Technology[];
  user = new User();

  ngOnInit() : void { 
    this.allProfiles = this.userService.getPofiles();
    this.allTechnologies = this.userService.getTechnologies();
  }
  
  onFormSubmit(form : NgForm) {
    this.isValidFormSubmitted = false;
    if(!form.valid) {
      return;
    } 
    this.isValidFormSubmitted = true;
    let userName = form.controls['userName'].value;
    let userProfiles : Profile = form.controls['profile'].value;
    let userTechnologies : Technology[] = form.controls['selectedTechs'].value;
    let newUser = new User();

    newUser.profile = userProfiles;
    newUser.technologies = userTechnologies;
    newUser.userName = userName;
    this.userService.createUser(newUser);	
	  
	  this.resetForm(form);
  }

  resetForm(form : NgForm) {
    form.resetForm();
	  this.user.profile = null;
	  this.user.userName = '';
  }

  setDefaultValues() {
	  this.user.userName = "Narendra Modi";    
	  this.user.profile = this.allProfiles[2];
	  this.user.technologies = [
	    this.allTechnologies[1],
			this.allTechnologies[3]
		];
	}
	onProfileChange() {
	   console.log('Profile Changed: '+ this.user.profile.prName);
  }
  
  compareTech(t1: Technology, t2: Technology): boolean {
	  console.log(t1.techId +'-' + t2.techId);
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
}
