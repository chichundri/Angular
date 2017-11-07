import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../directives/modal/modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  processValidation = false;

  data: any;
  depts: any[];
  msg: string;
  isModalOpen:boolean = false;
  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private datePipe: DatePipe,
              private router: Router) { }

  ngOnInit() {   
    this.registerService.getDepartments().subscribe(
      (jsonResponse) => {
        // console.log(jsonResponse.data);
        if(jsonResponse.data != null){
          this.depts = jsonResponse.data;
        } else if(jsonResponse.errorMsg != null){
          console.log(jsonResponse.errorMsg);
        }
      }
    );

    // if(this.jsonResponse != null && this.jsonResponse.data != null) {
    //   let data = this.jsonResponse.data;
    // } else {
    //   console.log(this.jsonResponse.errorMsg);
      
    // }
    // console.log(this.jsonResponse);
    
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      department: ['', Validators.required],
      dobAsString: []
    })
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    dobAsString: new FormControl()
  })

  onRegisterFormSubmit() {
    this.processValidation = true;
    // console.log(this.registerForm.value);
     if (this.registerForm.invalid) {
      return; //Validation failed, exit from method.
    }
    
    for(var name in this.registerForm.controls) {
      // (<FormControl>this.registerForm.controls[name]).updateValue('');
      
      // if(name == 'confirmPassword') {
      //   this.registerForm.controls[name].setErrors(null);
      //   this.registerForm.removeControl('confirmPassword');
      //   // this.registerForm.controls[name].clearValidators();
      //   this.registerForm.updateValueAndValidity();
      //   console.log(name);    
      // }

      // let userDate = this.registerForm.controls['dobAsString'].value;
      
      // let formattedDate = this.datePipe.transform(userDate);
      // console.log("formatted Date: "+formattedDate);
      
       


    }
    
    

    this.registerService.register(this.registerForm.value).subscribe(
      (jsonResponse) => {
        if(jsonResponse.data != null){
          console.log(jsonResponse.data);
          this.msg = jsonResponse.data;
          this.isModalOpen = true;
          // new ModalComponent().show();
          // this.router.navigate(['/dashboard']);
        } else if(jsonResponse.errorMsg != null){
          this.isModalOpen = true;
          this.msg = jsonResponse.errorMsg;
          console.log(jsonResponse.errorMsg);
        } else if(jsonResponse.msg != null) {
          this.isModalOpen = true;
          this.msg = jsonResponse.msg;
          
        }
      }
    )
  }

  hide() {
    this.isModalOpen = false;
  }
  onReset() {
    this.isModalOpen = true;
  }

}
