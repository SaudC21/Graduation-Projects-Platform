import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private headerService: HeaderService) {

  }
  ngOnInit(): void {
    this.headerService.setHeader('عرض رسالة');
  }
}
