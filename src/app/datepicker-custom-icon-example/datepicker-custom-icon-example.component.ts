import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-custom-icon-example',
  templateUrl: './datepicker-custom-icon-example.component.html',
  styleUrls: ['./datepicker-custom-icon-example.component.scss']
})
export class DatepickerCustomIconExampleComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
