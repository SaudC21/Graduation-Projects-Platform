import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  uid: string = '';
  password: string = '';
  user: any;

  constructor(private router: Router, private authService: AuthService) {}

  async onLogin() {
    if (isNaN(parseInt(this.uid))) {
      console.log(`enter correct id`);
      return;
    } else {
      await this.authService.authenticate(this.uid, this.password);
    }
  }

  routeRegister() {
    this.router.navigate(['/register']);
  }
}
