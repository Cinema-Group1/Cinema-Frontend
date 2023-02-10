import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammTicketComponent } from './programm-ticket.component';

describe('ProgrammTicketComponent', () => {
  let component: ProgrammTicketComponent;
  let fixture: ComponentFixture<ProgrammTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
