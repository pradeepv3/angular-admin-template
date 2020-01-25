import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'

import { FontAwesomeComponent } from './fontawesome/fontawesome.component'
import { SimpleLineIconComponent } from './simplelineicons/simplelineicons.component'

const IconsRouter: Routes = [{
  path: "",
  children: [
    {path: 'fontawesome', component: FontAwesomeComponent, data: {breadcrumb: "Fontawesome"}},
    {path: 'simplelineicons', component: SimpleLineIconComponent, data: {breadcrumb: "Simple Line Icons"}},
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(IconsRouter)],
  exports: [RouterModule]
})

export class IconsRouterModule {

}