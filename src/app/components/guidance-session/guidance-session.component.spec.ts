import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceSessionComponent } from './guidance-session.component';

describe('GuidanceSessionComponent', () => {
  let component: GuidanceSessionComponent;
  let fixture: ComponentFixture<GuidanceSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
