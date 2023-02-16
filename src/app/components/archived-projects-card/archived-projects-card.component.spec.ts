import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedProjectsCardComponent } from './archived-projects-card.component';

describe('ArchivedProjectsCardComponent', () => {
  let component: ArchivedProjectsCardComponent;
  let fixture: ComponentFixture<ArchivedProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedProjectsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
