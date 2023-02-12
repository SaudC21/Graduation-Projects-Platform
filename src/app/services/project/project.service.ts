import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from 'src/database/Schema/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  async getProjects(): Promise<Observable<Project[]>> {
    return this.http.get<Project[]>(
      `${environment.BACKEND_URL}${environment.PORT}/project`
    );
  }
}
