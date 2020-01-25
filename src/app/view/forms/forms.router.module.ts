import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../../_layout/app-layout/app-layout.component'

import { BasicformComponent } from './basic/basicform.component'
import { ValidationFormComponent } from './validation/validateform.component'
import { AdvancedFormComponent } from './advanced/advancedform.component'
import { WizardFormComponent } from './wizard/wizardform.component'

const formRouter: Routes = [
  {
    path: "", 
    children: [
      //{ path: "", component: BasicformComponent, data: {breadcrumb: "Basic Form"}},
      { path: "basic", component: BasicformComponent, data: {breadcrumb: "Basic Form"}},
      { path: "validation", component: ValidationFormComponent, data: {breadcrumb: "Validation Form"}},
      { path: "advanced", component: AdvancedFormComponent, data: {breadcrumb: "Advanced Form"}},
      { path: "wizard", component: WizardFormComponent, data: {breadcrumb: "Wizard Form"}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formRouter)],
  exports: [RouterModule]
})


export class FormRouterModule {}