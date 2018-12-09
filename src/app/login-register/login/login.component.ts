import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
//error message
  errorMessage: string;

  //define login form field and validators for email and password
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

    //login method
  login() {
    //checks details with authservice
  //once autherised full access to the project
    this.authService.doLogin(this.form.value)
    .then(res => {
      //on sucessfull login redirects to home page
      this.myRoute.navigate(['home']);
    }, firebase => {
      console.log(firebase);
      this.errorMessage = firebase.message;
    })
  }

  //login with facebook button 
  // source https://angular-templates.io
tryFacebookLogin(){
  //checks details with authservice
  //once autherised full access to the project
  this.authService.doFacebookLogin()
  .then(res => {
    //on sucessfull login redirects to home page
    this.myRoute.navigate(['/home']);
  })
}

//login with google button 
 // source https://angular-templates.io
tryGoogleLogin(){
  //checks details with authservice
  //once autherised full access to the project
  this.authService.doGoogleLogin()
  .then(res => {
    //on sucessfull login redirects to home page
    this.myRoute.navigate(['/home']);
  })
}
}
