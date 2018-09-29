import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginerrorComponent } from './loginerror.component';

describe('LoginerrorComponent', () => {
  let component: LoginerrorComponent;
  let fixture: ComponentFixture<LoginerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
