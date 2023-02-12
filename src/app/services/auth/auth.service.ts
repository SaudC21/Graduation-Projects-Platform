import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  async authenticate(uid: string, password: string, userType: string) {
    console.log(`authenticate mthod: `, uid, password, userType);
    console.log(
      `${environment.BACKEND_URL}${environment.PORT}/${userType}/authenticate`
    );
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
        console.log(e);
        // TODO: Display error message
        if (e.status === 401) {
          return 'invalid password';
        }
        return null;
      })
      .then((response: any) => {
        console.log(response);
        if (response == 'invalid password') {
          console.log(`36`);
          return;
        } else if (response == 'invalid token') {
          console.log(`39`);
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
      })
      .then(() => {
        this.http
          .get(
            `${environment.BACKEND_URL}${environment.PORT}/${userType}/${uid}`
          )
          .subscribe((res: any) => {
            console.log(res);
            this.userService.setUser(res);
          });
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
    console.log(`test`);
    this.router.navigate(['/login']);
  }

  async register(record: any, userType: string) {
    console.log(record);
    console.log('auth register method called');
    await this.http
      .post(
        `${environment.BACKEND_URL}${environment.PORT}/${userType}`,
        {
          uid: parseInt(record.uid),
          first_name: record.first_name,
          last_name: record.last_name,
          email: record.email,
          password_digest: record.password_digest,
          phone_number: record.phone_number,
          major: record.major,
        },
        { responseType: 'text' }
      )
      .toPromise()
      .then((res) => {
        console.log(res);
        alert(`You have been registered, please login with your credentials`);
        this.routeAuth();
      });
  }
}
