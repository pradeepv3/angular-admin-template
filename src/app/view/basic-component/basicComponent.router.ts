import { NgModule } from '@angular/core'
import { Router, Routes, RouterModule } from '@angular/router'

import { CardViewCompoment } from "./cards/cards.view.component"
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
 
const basicComponentRouter: Routes = [
  {
    path: "",
    children: [
      { path: "accordion", component: AccordionComponent, data: {breadcrumb: "Accordion"}},
      { path: "cards", component: CardViewCompoment, data: {breadcrumb: "Cards"}},
      { path: "buttons", component: ButtonComponent, data: {breadcrumb: "Buttons"}},
      { path: "carousel", component: CarouselComponent, data: {breadcrumb: "Carousel"}},
      { path: "datepicker", component: DatePickerComponent, data: {breadcrumb: "DatePicket"}},
      { path: "collapse", component: CollapseComponent, data: {breadcrumb: "Collapse"}},
      { path: "modal", component: ModalComponent, data: {breadcrumb: "Modal"}},
      { path: "pagination", component: PaginationComponent, data: {breadcrumb: "Pagination"}},
      { path: "popover", component: PopoverComponent, data: {breadcrumb: "Popover"}},
      { path: "progressbar", component: ProgressbarComponent, data: {breadcrumb: "Progressbar"}},
      { path: "rating", component: RatingComponent, data: {breadcrumb: "Rating"}},
      { path: "tabs", component: TabsComponent, data: {breadcrumb: "Tabs"}},
      { path: "tooltip", component: TooltipComponent, data: {breadcrumb: "Tooltips"}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(basicComponentRouter)],
  exports: [RouterModule]
})
export class BasicComponentRouterModule {}