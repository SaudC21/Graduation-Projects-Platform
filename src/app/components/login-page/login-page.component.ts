import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  uid: string = '';
  password: string = '';
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.routeLogin();
    }
  }

  async onLogin() {
    if (isNaN(parseInt(this.uid))) {
      // TODO: Display error message
      console.log(`only numbers are allowed`);
      return;
    } else {
      await this.authService.authenticate(this.uid, this.password, 'student');
    }
  }

  routeRegister() {
    this.router.navigate(['/register']);
  }

  routeLogin() {
    this.router.navigate(['/main']);
  }
}
