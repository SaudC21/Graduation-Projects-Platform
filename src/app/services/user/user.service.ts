import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = new User();
  userChange: Subject<User> = new Subject<User>();
  constructor() {
    this.userChange.subscribe((user) => {
      this.user = user;
    });
  }

  setUser(user: User) {
    this.userChange.next(user);
  }

  getUser() {
    return this.user;
  }
}
