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

  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const data = {
      api_url: "https://api.exoclick.com/v2/login",
      payload: JSON.stringify({api_token: ""})
    };

    return this.http
      .post('/api/proxy.php', data, { headers })
      .map((response: Response) => {
        this.isLoggedIn = true;
        // currently not recieving a response
        localStorage.setItem('exoClickToken', response['token']);
        return response;
      });
  }
 
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('exoClickToken');
  }


  isAuthenticated() {
    return this.isLoggedIn;
  }
  isAuthentcated() {
		const promise = new Promise(
			(resolve, reject) => {
				resolve(this.isLoggedIn);
			}
		);
		return promise;
	}

}
