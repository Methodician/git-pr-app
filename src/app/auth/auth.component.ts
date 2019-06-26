import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'prm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authSvc: AuthService) {}

  ngOnInit() {}

  login = (email: string, password: string) => {
    console.log({ email, password });
    this.authSvc
      .login(email, password)
      .then(user => console.log(user))
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          this.authSvc.register(email, password);
        }
      });
  };

  logout = () => this.authSvc.logout();
}
