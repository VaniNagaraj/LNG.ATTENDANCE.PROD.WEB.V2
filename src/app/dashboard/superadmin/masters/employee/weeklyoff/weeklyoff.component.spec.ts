import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyoffComponent } from './weeklyoff.component';

describe('WeeklyoffComponent', () => {
  let component: WeeklyoffComponent;
  let fixture: ComponentFixture<WeeklyoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
