import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
