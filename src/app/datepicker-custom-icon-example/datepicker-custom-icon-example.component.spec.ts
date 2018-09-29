import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomIconExampleComponent } from './datepicker-custom-icon-example.component';

describe('DatepickerCustomIconExampleComponent', () => {
  let component: DatepickerCustomIconExampleComponent;
  let fixture: ComponentFixture<DatepickerCustomIconExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerCustomIconExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustomIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
