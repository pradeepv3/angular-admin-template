import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './app-dropdownmenu.component.html'
})

export class AppDropDownMenuComponent implements OnInit {

  constructor() { }
  @Input() showmenu: string;

  ngOnInit() {

  }

}