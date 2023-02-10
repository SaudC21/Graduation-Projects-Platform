import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineElement } from '../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  timeline: TimelineElement[] = [];
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.timeline = [{ caption: 'saud', date: new Date(), title: 'saud', content: 'saud' }, { caption: 'faisal', date: new Date(), title: 'faisal', content: 'faisal' }, { caption: 'abdulrahman', date: new Date(), title: 'abdulrahman', content: 'abdulrahman' }];
  }
  routeTest() {
    this.router.navigate(['../test']);
  }

}
