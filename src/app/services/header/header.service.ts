import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  header = '';
  headerChange: Subject<string> = new Subject<string>();

  constructor() {
    this.headerChange.subscribe((value) => {
      this.header = value;
    });
  }

  setHeader(value: string) {
    this.headerChange.next(value);
  }
}
