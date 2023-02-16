import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  content: string = '';
  subject: string = '';
  email: string = 'saudhassan2@gmail.com';

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setHeader('طلب دعم فني');
  }

}
