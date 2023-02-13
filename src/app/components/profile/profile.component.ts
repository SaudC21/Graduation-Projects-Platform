import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { Student } from '../../models/student';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Student = new Student();

  constructor(private headerService: HeaderService, private userService: UserService){

  }

  ngOnInit(): void {
      this.headerService.setHeader('المعلومات الشخصية');
  }

}
