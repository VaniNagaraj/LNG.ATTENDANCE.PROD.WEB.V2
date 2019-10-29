import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustManualAttendanceComponent } from './custManualAttendance.component';

describe('CustManualAttendanceComponent', () => {
  let component: CustManualAttendanceComponent;
  let fixture: ComponentFixture<CustManualAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustManualAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustManualAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
