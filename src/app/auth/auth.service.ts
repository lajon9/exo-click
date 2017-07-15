import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  private exoClickLoginEndPoint = 'https://api.exoclick.com/v2/login';

  constructor(private http: Http) {}

  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.exoClickLoginEndPoint,
        JSON.stringify({ username: username, password: password }),
        { headers }
      )
      .map((response: Response) => {
        let user = response.json();
        this.isLoggedIn = true;
        return user;
      });
  }
 
  logout() {
    this.isLoggedIn = false;
  }


  isAuthenticated() {
    return this.isLoggedIn;
  }

}
