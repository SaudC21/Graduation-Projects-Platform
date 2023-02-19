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
  searchedProjects: Project[] = [];
  rowCount = 0;
  searchText: string = '';
  projectCount = 0;
  rowArray = [0, 1, 2, 3];
  length = 0;

  constructor(
    private headerService: HeaderService,
    private projectService: ProjectService
  ) { }

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('أرشيف مشاريع التخرج');
    try {
      await this.projectService.getProjects().then((projects) => {
        this.projects = projects;
        this.rowCount = parseInt(
          (this.projects.length / 4) as unknown as string
        );
        this.searchedProjects = this.projects;
        length = this.searchedProjects.length;
      });
    } catch (err) {
      console.log(err);
    }
  }

  onSearchTextEntered(searchValue: any) {
    this.length = this.searchedProjects.length;
    this.searchedProjects = [];
    this.searchText = searchValue;
    if (!searchValue || searchValue == '') {
      this.searchedProjects = this.projects;
      return;
    }

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
        this.searchedProjects.push(this.projects[i]);
        continue;
      } else {
        this.searchedProjects.splice(i, 1);
      }
    }
    console.log(`searched projects; `, this.searchedProjects);
    this.length = this.searchedProjects.length;
  }
}
