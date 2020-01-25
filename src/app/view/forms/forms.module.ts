import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { NgxMaskModule} from 'ngx-mask'
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider'

import { FormRouterModule } from './forms.router.module'
import { BsDatepickerModule } from 'ngx-bootstrap'

import { BasicformComponent } from './basic/basicform.component'
import { ValidationFormComponent } from './validation/validateform.component'
import { AdvancedFormComponent } from './advanced/advancedform.component'
import { WizardFormComponent } from './wizard/wizardform.component'

import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormRouterModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxBootstrapSliderModule,
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    BasicformComponent,
    ValidationFormComponent,
    AdvancedFormComponent,
    WizardFormComponent,
  ],
  exports: [
    BasicformComponent,
    ValidationFormComponent,
  ]
})

export class FormViewModule{}