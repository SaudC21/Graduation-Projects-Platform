import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project';
import { Input } from '@angular/core'

@Component({
  selector: 'app-archived-projects-card',
  templateUrl: './archived-projects-card.component.html',
  styleUrls: ['./archived-projects-card.component.css']
})

export class ArchivedProjectsCardComponent {
  @Input() project: any = new Project();
  @Output() increment = new EventEmitter();
  @Input() count = 0;
  @Input() projectLength = 0;

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.increment.emit();
  }
}
