import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { Student } from '../../models/student';
import { UserService } from '../../services/user/user.service';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project/project.service';
import { Supervisor } from '../../models/supervisor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Student = new Student();
  project: Project = new Project();
  supervisor: Supervisor = new Supervisor();
  students: Student[] = [];

  constructor(private headerService: HeaderService, private userService: UserService, private projectService: ProjectService) {

  }

  async ngOnInit(): Promise<void> {
    this.headerService.setHeader('المعلومات الشخصية');
    this.user = this.userService.getUser();
    await this.projectService.getSupervisor().then(data => {
      this.supervisor = data;

    });
    await this.projectService.getProject().then(async project => {
      this.project = project as unknown as Project;
    }).then(async () => {
      const groupStudents = await this.userService.getStudentsByGroup();
      for (let student of groupStudents) {
        if (student.uid != this.user.uid) {
          this.students.push(student);
        }
      }


    });
  }

}
