import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "box-widget",
  templateUrl: "./box.component.html"
})

export class BoxWidgetComponent implements OnInit {
  constructor() {}

  @Input() iconClassName: string;
  @Input() countValue: string;
  @Input() countLabel: string;
  @Input() customClass: string;
  ngOnInit(){}
}