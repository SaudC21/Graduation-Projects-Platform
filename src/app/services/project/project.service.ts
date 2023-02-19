import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../../models/project';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { SupervisorService } from '../supervisor/supervisor.service';
import { Supervisor } from '../../models/supervisor';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];
  project: Project = new Project();
  supervisor: Supervisor = new Supervisor();

  constructor(private http: HttpClient, private userService: UserService, private supervisorService: SupervisorService) { }

  async getProjects(): Promise<any> {
    return this.http.get<Project[]>(
      `${environment.BACKEND_URL}${environment.PORT}/project`
    ).toPromise().then((data) => {
      this.projects = data as Project[];
      return data;
    });
  }

  async getProject(): Promise<any> {
    let groupId = this.userService.getGroupID();


    return await this.http.get<Project>(`${environment.BACKEND_URL}${environment.PORT}/project/:${groupId}`).toPromise().then(data => {
      return data;
    });
  }

  async getSupervisor(): Promise<any> {
    await this.getProject().then(async project => {
      this.project = project;
      const data = await this.supervisorService.getSupervisor(project.supervisor_id);
      this.supervisor = data;
      return data;

    });
    return this.supervisor;
  }

  async updateProject(object: any): Promise<any> {
    let groupId = this.userService.getGroupID();
    return await this.http.put<Project>(
      `${environment.BACKEND_URL}${environment.PORT}/project/:${groupId}`,
      { object },
      { responseType: 'text' as 'json' }
    ).toPromise().then(res => {
      console.log(res);
    })
  }
}
