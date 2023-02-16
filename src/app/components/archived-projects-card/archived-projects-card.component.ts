import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Project } from '../../models/project';
import { Input } from '@angular/core'

@Component({
  selector: 'app-archived-projects-card',
  templateUrl: './archived-projects-card.component.html',
  styleUrls: ['./archived-projects-card.component.css']
})

export class ArchivedProjectsCardComponent {
  @Input() project: any = new Project();

}
