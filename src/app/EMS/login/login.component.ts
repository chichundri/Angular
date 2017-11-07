import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';

import { LoginService } from '../services/login.service';
import { Employee }  from '../model/employee';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  processValidation : boolean = false;
  statusCode: number;
  employee: Employee[];

  loginForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)	
  })

  constructor(private fb: FormBuilder,private loginService: LoginService) {
    
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId:['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onLoginFormSubmit() {
    this.processValidation = true;
    if (this.loginForm.invalid) {
      return; //Validation failed, exit from method.
    }

    let userId = this.loginForm.get('userId').value.trim();
    let password = this.loginForm.get('password').value.trim();
    
    this.loginService.login(userId,password).subscribe(
      data => {
        if(data.errorMsg != "" && data.errorMsg != null){
          alert(data.errorMsg);
        } else {
          console.log(data);
        }
      },      
    );
  }


  onReset() {
    this.loginForm.reset();
    this.loginForm.pristine;
  }
}
