import { Component } from '@angular/core'

@Component({
  templateUrl: './rating.component.html'
})

export class RatingComponent {
  max = 10;
  rate = 7;
  isReadonly = false;
  x: number = 5;
  y: number = 2; 
  overStar: number | undefined;
  percent: number;
 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }
}