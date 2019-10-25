import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBeaconMapComponent } from './block-beacon-map.component';

describe('BlockBeaconMapComponent', () => {
  let component: BlockBeaconMapComponent;
  let fixture: ComponentFixture<BlockBeaconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBeaconMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBeaconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
