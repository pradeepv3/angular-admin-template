import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'

import { 
  AccordionModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  BsDatepickerModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
  } from 'ngx-bootstrap';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms'


//Custom Components
import { BoxWidgetComponent } from '../component/boxcomponent/box.component'
import { TodoListComponent } from '../component/todolist/todolist.component'
import { ChartjsComponent } from '../component/chartjs/charjs.component'
import { SocialShareComponent } from '../component/social-share/social-share.component'
import { ProgressBarWidgetComponent } from '../component/progressbar/progressbar.component'
import { CardsComponent } from '../component/cards/cards.component'

// Directives
import  {RemoveWrapperDirective} from '../directives/remove-wrapper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    RemoveWrapperDirective,
    BoxWidgetComponent,
    TodoListComponent,
    ChartjsComponent,
    SocialShareComponent,
    ProgressBarWidgetComponent,
    CardsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RemoveWrapperDirective,
    BoxWidgetComponent,
    TodoListComponent,
    ChartjsComponent,
    SocialShareComponent,
    ProgressBarWidgetComponent,
    CardsComponent,
    AccordionModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule
  ]
})

export class SharedModule {

}