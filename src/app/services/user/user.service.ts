import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Student = new Student();
  userChange: Subject<Student> = new Subject<Student>();
  constructor() {
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

  getGroupID(){
    return this.user.group_id;
  }
}
