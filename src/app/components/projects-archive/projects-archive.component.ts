import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-archive',
  templateUrl: './projects-archive.component.html',
  styleUrls: ['./projects-archive.component.css'],
})
export class ProjectsArchiveComponent implements OnInit {
  projects: Project[] = [];
  rowCount = 0;
  searchText: string = '';

  constructor(
    private headerService: HeaderService,
    private projectService: ProjectService
  ) { }

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('أرشيف مشاريع التخرج');
    try {
      await (
        await this.projectService.getProjects()
      ).subscribe(
        (data) => {
          this.projects = data;
          this.rowCount = parseInt((this.projects.length / 4) as unknown as string);

        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
