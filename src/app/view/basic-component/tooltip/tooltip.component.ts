import { Component } from '@angular/core'

@Component({
templateUrl: './tooltip.component.html'
})

export class TooltipComponent {
  tooltipPlacement = ['left','right','top','bottom','auto'];
}