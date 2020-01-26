import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  templateUrl: "./advancedform.component.html"
})
export class AdvancedFormComponent {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  mytime: Date = new Date();
  value = "344";
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });

  sliderValue = "35";
  sliderRangeValue = [20, 90];

  change() {
    //console.log(this.sliderValue);
  }

  onSliderRange() {}
}
