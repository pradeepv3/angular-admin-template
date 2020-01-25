import {NgModule} from '@angular/core'
//import { CommonModule } from '@angular/common'

import  { BasicComponentRouterModule } from './basicComponent.router'

//import { RemoveWrapperDirective } from '../../directives/remove-wrapper'
import { CardViewCompoment } from './cards/cards.view.component'
import { AccordionComponent } from "./accordion/accordion.component"
import { ButtonComponent } from "./buttons/buttons.component"
import { CarouselComponent } from "./carousel/carousel.component"
import { CollapseComponent } from "./collapse/collapse.component"
import { DatePickerComponent } from "./datepicker/datepicker.component"
import { ModalComponent } from "./modal/modal.component"
import { PaginationComponent } from "./pagination/pagination.component"
import { PopoverComponent } from "./popover/popover.component"
import { ProgressbarComponent } from "./progressbar/progressbar.component"
import { RatingComponent } from "./rating/rating.component"
import { TabsComponent } from "./tabs/tabs.component"
import { TooltipComponent } from "./tooltip/tooltip.component"

import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    BasicComponentRouterModule,    
  ],
  declarations: [
    CardViewCompoment,
    AccordionComponent, 
    ButtonComponent,
    CarouselComponent,
    CollapseComponent,
    DatePickerComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TooltipComponent
  ],
  exports: [
    CardViewCompoment, 
    AccordionComponent, 
    ButtonComponent,
    CarouselComponent,
    CollapseComponent,
    DatePickerComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TooltipComponent
  ]
})

export class BasicComponent {

}