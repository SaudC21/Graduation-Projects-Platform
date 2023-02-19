import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../../database/Schema/project';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})

export class AcademyComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private headerService: HeaderService,
    private projectService: ProjectService
  ) {}

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('الأكاديمية الرقمية');
    try {
      await this.projectService.getProjects().then((projects) => {this.projects = projects;});
    } catch (err) {
      console.log(err);
    }
  }
}
