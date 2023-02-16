import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../../models/student';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Student = new Student();
  userChange: Subject<Student> = new Subject<Student>();

  constructor(private http: HttpClient) {
    this.userChange.subscribe((user) => {
      this.user = user;
    });
  }

  setUser(user: Student) {
    this.userChange.next(user);
  }

  getUser() {
    return this.user;
  }

  getGroupID() {
    return this.user.group_id;
  }

  async getStudentsByGroup(): Promise<Student[]> {
    const data = await this.http.get<any>(
      `${environment.BACKEND_URL}${environment.PORT}/student/group/${this.user.group_id}`
    ).toPromise();
    return data
  }
}
