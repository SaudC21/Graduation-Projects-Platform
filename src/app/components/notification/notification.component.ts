import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  constructor(private headerService: HeaderService) {

  }
  ngOnInit(): void {
    this.headerService.setHeader('عرض تنبيه');
  }
}
