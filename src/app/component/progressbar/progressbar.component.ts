import { Component, Input } from '@angular/core'


@Component({
  selector: "progressbar-widget",
  templateUrl: './progressbar.component.html'
})
export class ProgressBarWidgetComponent {
  @Input() progressValue: any;
  @Input() progressTitle: any;
  @Input() progressText: any;
  @Input() progressBarMaxValue: string;
  @Input() progressBarValue: any;
  @Input() progressBarAnimated: boolean;
  @Input() progressBarStriped: boolean;
  @Input() progressBarType: string;
  @Input() settingsMenu: boolean;

}