import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {}
  ngOnInit() {
    this.headerService.setHeader('لوحة المعلومات');
  }
  routeTest() {
    this.router.navigate(['../test']);
  }
}
