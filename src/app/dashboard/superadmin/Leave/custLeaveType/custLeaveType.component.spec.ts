import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLeaveTypeComponent } from './custLeaveType.component';

describe('CustLeaveTypeComponent', () => {
  let component: CustLeaveTypeComponent;
  let fixture: ComponentFixture<CustLeaveTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustLeaveTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLeaveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
