import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit{
  constructor (private headerService: HeaderService){

  }
  ngOnInit(): void {
    this.headerService.setHeader('قائمة التنبيهات');
  }

}
