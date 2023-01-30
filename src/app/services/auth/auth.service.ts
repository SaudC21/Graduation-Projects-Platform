import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  async authenticate(uid: string, password: string, userType: string) {
    this.http
      .post(
        `${environment.BACKEND_URL}${environment.PORT}/${userType}/authenticate`,
        {
          uid: uid,
          password: password,
        },
        { responseType: 'text' }
      )
      .toPromise()
      .catch((e) => {
        // TODO: Display error message
        if (e.status === 401) {
          return 'invalid password';
        }
        return null;
      })
      .then((response: any) => {
        if (response == 'invalid password') {
          return;
        } else if (response == 'invalid token') {
          return 'invalid token';
        } else {
          const expiresAt = moment().add(
            JSON.parse(response).expiresIn,
            'seconds'
          );
          localStorage.setItem('token', JSON.parse(response).token);
          localStorage.setItem(
            'expiresAt',
            JSON.stringify(expiresAt.valueOf())
          );
          this.routeLogin();
          return;
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration);
    console.log(expiresAt);

    return moment(expiresAt);
  }

  routeLogin() {
    this.router.navigate(['/main']);
  }

  routeAuth() {
    this.router.navigate(['/login']);
  }
}
