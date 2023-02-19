import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Supervisor } from '../../models/supervisor';
import { ProjectService } from '../../services/project/project.service';
import { UserService } from '../../services/user/user.service';
import { HeaderService } from '../../services/header/header.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  project: Project = new Project();
  supervisor: Supervisor = new Supervisor();
  groupMembers: Student[] = [];

  constructor(private projectService: ProjectService, private userService: UserService, private headerService: HeaderService) {

  }

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('معلومات المشروع');
    await this.projectService.getProject().then((project: Project) => {
      this.project = project;
    });
    await this.projectService.getSupervisor().then((supervisor: Supervisor) => {
      this.supervisor = supervisor;
    }).then(async () => {
      const groupStudents = await this.userService.getStudentsByGroup();
      for (let student of groupStudents) {
        if (student.uid != this.userService.getUser().uid) {
          this.groupMembers.push(student);
        }
      }      
    })
  }

}
