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

  errorMessage: string;
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
  login() {
    this.authService.doLogin(this.form.value)
    .then(res => {
      this.myRoute.navigate(['browse']);
    }, firebase => {
      console.log(firebase);
      this.errorMessage = firebase.message;
    })
  }

  //login with facebook button 
tryFacebookLogin(){
  this.authService.doFacebookLogin()
  .then(res => {
    this.myRoute.navigate(['/browse']);
  })
}
//login with google button 
tryGoogleLogin(){
  this.authService.doGoogleLogin()
  .then(res => {
    this.myRoute.navigate(['/browse']);
  })
}
}
