import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingfailureComponent } from './bookingfailure.component';

describe('BookingfailureComponent', () => {
  let component: BookingfailureComponent;
  let fixture: ComponentFixture<BookingfailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingfailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
