import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   //definging inputs
  errorMessage: string;
  email: string;
  pwd: string;
  cpwd: string;
  name: string;
  description: string;
  
   //define registration form field and validators for email and password
  //through the auth searvice (OAuth 2)
  form;
  constructor(private fb: FormBuilder, private myRoute: Router,
    private authService: AuthService) { 
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  ngOnInit() {
  }

  register() {
    //enters your details with authservice
  //details go to auth service once autherised
  //regeristration will be sucessfull with firebase
    this.authService.signup(this.email, this.pwd, this.name);
    this.email,
    this.pwd,
    this.name;
  }

}
