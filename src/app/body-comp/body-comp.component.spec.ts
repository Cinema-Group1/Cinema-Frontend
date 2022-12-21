import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCompComponent } from './body-comp.component';

describe('BodyCompComponent', () => {
  let component: BodyCompComponent;
  let fixture: ComponentFixture<BodyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
