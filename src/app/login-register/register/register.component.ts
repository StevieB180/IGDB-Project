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
  errorMessage: string;
  email: string;
  pwd: string;
  cpwd: string;
  name: string;
  description: string;
  
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
    this.authService.signup(this.email, this.pwd, this.name);
    this.email,
    this.pwd,
    this.name;
  }

}
