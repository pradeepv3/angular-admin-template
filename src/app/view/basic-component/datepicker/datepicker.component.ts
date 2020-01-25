import { Component } from '@angular/core'
import { FormControl, FormGroup,ReactiveFormsModule  } from '@angular/forms';

@Component({
  templateUrl: './datepicker.component.html'
})

export class DatePickerComponent{
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  currentDate = new Date();
  Datepickerform = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
}