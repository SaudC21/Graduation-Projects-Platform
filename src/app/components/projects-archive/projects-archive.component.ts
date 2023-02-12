import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/database/Schema/project';

@Component({
  selector: 'app-projects-archive',
  templateUrl: './projects-archive.component.html',
  styleUrls: ['./projects-archive.component.css'],
})
export class ProjectsArchiveComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private headerService: HeaderService,
    private projectService: ProjectService
  ) {}

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('أرشيف المشاريع');
    try {
      await (
        await this.projectService.getProjects()
      ).subscribe(
        (data) => {
          this.projects = data;
        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  test() {
    console.log(this.projects);
  }
}
