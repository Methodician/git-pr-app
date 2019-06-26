import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser$: Observable<User>;
  constructor(private afAuth: AngularFireAuth) {
    this.loggedInUser$ = this.afAuth.authState;
  }

  register = (email: string, password: string) => {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  };

  login = (email: string, password: string) => {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  };

  logout = () => this.afAuth.auth.signOut();
}
