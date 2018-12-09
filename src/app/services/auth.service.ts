import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import * as firebase from 'firebase/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //user observable
  private user: Observable<firebase.User>;
  private userName: string;
  loggedInStatus: boolean = false;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private notifier: NotificationService) {
    this.user = _firebaseAuth.authState;
  }

  getUser() {
    return this.user;
  }

  //authentication on email password and name
  //send verification email to the user to accept
  signup(email: string, password: string, name: string) {
    // clear all messages
    this.notifier.display(false, '');
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendEmailVerification();
        const message = 'A verification email has been sent, please check your email and follow the steps!';
        this.notifier.display(true, message);
        setTimeout(() => {
          this.notifier.display(false, '');
        }, 10000);
        //returns the verified user details to firebase to store
        //with there uid
        return firebase.database().ref('users/' + res.user.uid).set({
          email: res.user.email,
          uid: res.user.uid,
          registrationDate: new Date().toString(),
          name: name
        })
          .then(() => {
            res.user.updateProfile({displayName: name, photoURL: null})
          })
          .then(() => {
            firebase.auth().signOut();
            this.router.navigate(['login']);
          });
      })
      .catch(err => {
        console.log(err);
        this.notifier.display(true, err.message);
        setTimeout(() => {
          this.notifier.display(false, '');
        }, 5000);
      });
  }

//send a verification email
  sendEmailVerification() {
    this._firebaseAuth.authState.subscribe(user => {
      user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        });
    });
  }

  //if valid info entered register and store users
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  //allows login for a user that has been authenticted
  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.loggedInStatus = true;
        this.router.navigate(['home']);
      }, err => reject(err))
    })
  }

  //logout user
  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this._firebaseAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
      this.loggedInStatus = false;

    });
  }

  isLoggedIn():boolean {
      return this.loggedInStatus;
  }

  //log in a user with a pop up window 
//user uses there facebook email and password tho do this
doFacebookLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.FacebookAuthProvider();
    this._firebaseAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
      this.loggedInStatus = true;
    }, err => {
      console.log(err);
      reject(err);
    })
  })
}
//log in a user with a pop up window 
//user uses there gmail email and password tho do this
doGoogleLogin(){
return new Promise<any>((resolve, reject) => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  this._firebaseAuth.auth
  .signInWithPopup(provider)
  .then(res => {
    resolve(res);
    this.loggedInStatus = true;
  })
})
}
}
