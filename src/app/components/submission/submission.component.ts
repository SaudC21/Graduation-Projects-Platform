import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { ProjectService } from '../../services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  repoLink: string = '';
  constructor(private headerService: HeaderService, private projectService: ProjectService, private router: Router) {

  }
  ngOnInit() {
    this.headerService.setHeader('رفع متطلبات المشروع');
  }

  submit() {
    this.projectService.updateProject({ repo_link: this.repoLink }).then(() => {
      alert('Submission received successfully');
      this.router.navigate(['/main/dashboard']);
    });
  }

}
