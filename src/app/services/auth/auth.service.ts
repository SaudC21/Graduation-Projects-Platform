import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  async authenticate(uid: string, password: string) {
    this.http
      .post(
        'http://localhost:4000/student/authenticate',
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
      .then((response) => {
        if (response == 'invalid password') {
        } else {
          // TODO: Set token as cookie
          this.routeLogin();
        }
      });
  }

  routeLogin() {
    this.router.navigate(['/main']);
  }
}
