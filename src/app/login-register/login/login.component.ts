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
      private auth: AuthService) { 
        this.form = fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
        });
      }
  
    ngOnInit() {
    }
  login() {
    this.auth.doLogin(this.form.value)
    .then(res => {
      this.myRoute.navigate(['games-list']);
    }, firebase => {
      console.log(firebase);
      this.errorMessage = firebase.message;
    })
  }
}
