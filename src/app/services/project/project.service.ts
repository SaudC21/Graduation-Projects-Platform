import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from 'src/database/Schema/project';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];

  constructor(private http: HttpClient, private userService: UserService) { }

  async getProjects(): Promise<Observable<Project[]>> {
    return this.http.get<Project[]>(
      `${environment.BACKEND_URL}${environment.PORT}/project`
    );
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
