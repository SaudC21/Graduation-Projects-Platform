import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-project-requirements',
  templateUrl: './project-requirements.component.html',
  styleUrls: ['./project-requirements.component.css']
})
export class ProjectRequirementsComponent implements OnInit{
  constructor(private headerService: HeaderService){

  }
  ngOnInit() {
    this.headerService.setHeader('متطلبات المشروع');
  }

}
