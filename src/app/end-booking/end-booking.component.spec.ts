import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBookingComponent } from './end-booking.component';

describe('EndBookingComponent', () => {
  let component: EndBookingComponent;
  let fixture: ComponentFixture<EndBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
