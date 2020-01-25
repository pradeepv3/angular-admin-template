import { Component } from '@angular/core'

@Component({
  templateUrl: './buttons.component.html'
})

export class ButtonComponent {
   buttonValues = [
    {buttonName: "Primary", buttonClass: "primary"},
    {buttonName: "Secondary", buttonClass: "secondary"},
    {buttonName: "Success", buttonClass: "success"},
    {buttonName: "Info", buttonClass: "info"},
    {buttonName: "Warning", buttonClass: "warning"},
    {buttonName: "Danger", buttonClass: "danger"},
    {buttonName: "Light", buttonClass: "light"},
    {buttonName: "Dark", buttonClass: "dark"},
    {buttonName: "Link", buttonClass: "link"},
   ]  
}