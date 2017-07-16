import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from '../../app.config';

/** Service responsible for user authentication */

@Injectable()
export class AuthService {
  username: string;
  isLoggedIn: boolean = false;
  private exoClickLoginEndPoint = 'https://api.exoclick.com/v2/login';

  constructor(private http: Http) {}

  /** Authenticate user with ExoClick API
   * 
   * @param {Object} user holds username and password parameters
   * 
   * @returns {Object} response from the API
   */
  login(user) {
    this.username = user.username;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    let body = new URLSearchParams();
    body.set('api_url', 'https://api.exoclick.com/v2/login');
    body.set('payload', JSON.stringify({
      api_token: config.apiKey,
      username: user.username,
      password: user.password
    }));
    
    return this.http
      .post('/api/proxy.php', body, { headers })
      .map((response: Response) => {
        console.log(response)

        const resBody = response['_body'];
        const resData = JSON.parse(resBody.substring(resBody.indexOf('{'), resBody.indexOf('}') + 1));

        this.isLoggedIn = true;
        localStorage.setItem('exoClickToken', resData.token);
        return response;
      });
  }
 
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('exoClickToken');
  }

  /** Detect is user have been authenticated
   * 
   * @returns {Boolean} promise with the boolean value
   */
  isAuthentcated() {
		const promise = new Promise(
			(resolve, reject) => {
				resolve(this.isLoggedIn);
			}
		);
		return promise;
	}

}
