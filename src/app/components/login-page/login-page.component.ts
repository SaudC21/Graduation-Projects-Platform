import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  @ViewChild('button') elRef: ElementRef | any;
  uid: string = '';
  password: string = '';
  user: any;

  constructor(private router: Router, private http: HttpClient) {}

  async onLogin() {
    await this.http
      .post<any>('http://localhost:4000/student/authenticate', {
        uid: this.uid,
        password: this.password,
      })
      .subscribe((data) => {
        this.user = data;
        console.log(this.user);

        if (data == undefined || data == null) {
          // TODO: Display error message to user
          console.log(`Invalid password`);
        } else {
          this.routeLogin();
        }
      });
  }

  routeLogin() {
    this.router.navigate(['/main']);
  }

  routeRegister() {
    this.router.navigate(['/register']);
  }
}
