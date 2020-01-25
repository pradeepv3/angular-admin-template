import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IconsRouterModule } from './icons.router.module'
import { FontAwesomeComponent } from './fontawesome/fontawesome.component'
import { SimpleLineIconComponent } from './simplelineicons/simplelineicons.component'

import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [CommonModule, IconsRouterModule, SharedModule],
  declarations:[FontAwesomeComponent,SimpleLineIconComponent],
  exports:[FontAwesomeComponent, SimpleLineIconComponent]
})

export class IconsModule {

}