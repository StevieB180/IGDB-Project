import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;
  user: firebase.User;

  constructor(private auth: AuthService, private router: Router) { }

  userLoggedIn():boolean{
    this.isLoggedIn = this.auth.isLoggedIn();
    return this.isLoggedIn
  }

  onLogout() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
}
