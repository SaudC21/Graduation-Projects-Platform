import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  constructor(private headerService: HeaderService) {

  }
  ngOnInit(): void {
    this.headerService.setHeader('صندوق الرسائل');
  }
}
