import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  header = '';
  userName = '';
  constructor(
    private headerService: HeaderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.headerService.headerChange.subscribe((header) => {
      this.header = header;
    });
    this.userService.userChange.subscribe((user: any) => {
      this.userName = `${user.first_name} ${user.last_name}`;
    });
  }
}
