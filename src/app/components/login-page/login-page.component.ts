import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  @ViewChild('button') elRef: ElementRef | any;

  constructor(private router: Router){

  }

  routeLogin(event: any){
    console.log(event)
    this.router.navigate(['/dashboard']);
  }

  routeRegister(event: any){
    console.log(event)
    this.router.navigate(['/register']);
  }

}
