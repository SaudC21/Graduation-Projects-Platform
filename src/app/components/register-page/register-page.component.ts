import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ValidatorService } from '../../services/validator/validator.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  user: User = new User();
  pwConfirmation: string = '';
  majors = ['تقنية معلومات', 'علوم حاسب', 'نظم معلومات'];

  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private authService: AuthService,
    public validator: ValidatorService
  ) { }

  ngOnInit(): void {

  }

  change(event: any) {
    console.log(event);
    console.log(this.user.major);
  }

  onRegister() {
    if (this.user.password_digest != this.pwConfirmation) {
      alert(`Please make sure the passwords match`);
      return;
      // TODO: Display error message
    }
    console.log(`onRegister() called`);
    console.log(this.user);
    this.authService.register(this.user, 'student');
  }
}
