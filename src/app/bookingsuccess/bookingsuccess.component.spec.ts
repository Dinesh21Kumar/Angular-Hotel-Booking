import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsuccessComponent } from './bookingsuccess.component';

describe('BookingsuccessComponent', () => {
  let component: BookingsuccessComponent;
  let fixture: ComponentFixture<BookingsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
