import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  processValidation : boolean = false;
  loginForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)	
  })

  constructor(private fb: FormBuilder) {
    
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
    
  }

  onReset() {
    this.loginForm.reset();
    this.loginForm.pristine;
  }

  log(val) { 
    // console.log(val);
    // console.log(JSON.stringify(this.loginForm.value));
    
  }
}
