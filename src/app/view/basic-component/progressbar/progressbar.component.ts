import { Component } from '@angular/core'

@Component({
  templateUrl: './progressbar.component.html'
})



export class ProgressbarComponent {
  constructor(){
    this.random();
    this.randomStacked();
  }
  max: number = 200;
  showWarning: boolean;
  dynamic: number;
  type: string;
  stacked: any[] = [];

  random(): void {
    let value = Math.floor(Math.random() * 100 + 1);
    let type: string;
 
    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }
 
    this.dynamic = value;
    this.type = type;
  }

  randomStacked(): void {
    let types = ['success', 'info', 'warning', 'danger'];
 
    this.stacked = [];
    let n = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < n; i++) {
      let index = Math.floor(Math.random() * 4);
      let value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  }
}