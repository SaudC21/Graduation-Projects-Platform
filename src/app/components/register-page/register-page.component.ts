import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  user: Student = new Student();
  pwConfirmation: string = '';
  majors = ['تقنية معلومات', 'علوم حاسب', 'نظم معلومات'];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

  }

  onRegister() {
    if (this.user.password_digest != this.pwConfirmation) {
      alert(`Please make sure the passwords match`);
      return;
    }
    this.authService.register(this.user, 'student');
  }
}
