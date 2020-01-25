import { Component } from '@angular/core';

import { DOCUMENT } from '@angular/common';
//import { DeviceDetectorService } from 'ngx-device-detector';

import  { NarvBarServices } from './services/navbar.services'

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  constructor() { }
}