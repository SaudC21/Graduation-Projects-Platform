import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private http: HttpClient) {}

  test() {
    this.http
      .get(`${environment.BACKEND_URL}${environment.PORT}/student/hello`, {})
      .subscribe((data) => {
        console.log(data);
      });
  }
}
