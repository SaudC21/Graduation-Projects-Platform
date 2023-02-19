import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor() { }

  enteredSearchValue: string = '';

  @Output() searchValueChange: EventEmitter<string> = new EventEmitter<string>();

}
