import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { Supervisor } from '../../models/supervisor';
import { SupervisorService } from '../../services/supervisor/supervisor.service';

@Component({
  selector: 'app-guidance-session',
  templateUrl: './guidance-session.component.html',
  styleUrls: ['./guidance-session.component.css']
})
export class GuidanceSessionComponent implements OnInit {
  content: string = '';
  subject: string = '';
  email: string = '';
  supervisor: Supervisor = new Supervisor();
  supervisors: Supervisor[] = [];

  constructor(
    private headerService: HeaderService,
    private supervisorService: SupervisorService
  ) {

  }

  ngOnInit() {
    this.headerService.setHeader('طلب جلسة توجيه');
    this.supervisorService.getSupervisors().then(data => {
      console.log(data);

      this.supervisors = data;
    });

  }

  change(event: any) {
    for (let i = 0; i < this.supervisors.length; i++) {
      if (this.supervisors[i].uid == event) {
        console.log(this.supervisors[i]);
        this.supervisor = this.supervisors[i];
      }
    }
    this.email = this.supervisor.email;

  }

}
