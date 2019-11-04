import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftComponent } from './empshift.component';

describe('ShiftComponent', () => {
  let component: ShiftComponent;
  let fixture: ComponentFixture<ShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
