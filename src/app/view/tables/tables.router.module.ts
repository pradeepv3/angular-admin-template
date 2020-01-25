import { NgModule } from '@angular/core'
import { Router, Routes, RouterModule } from '@angular/router'

//import { AppLayoutComponent } from '../../_layout/app-layout/app-layout.component'

import { BasicTableComponent } from './basic/basictable.component'
import { DataTableComponent } from './datatable/datatable.component'

const tableRouter: Routes = [
  {
    path: "",
    children: [
      { path: "basic", component: BasicTableComponent, data: {breadcrumb: "Basic Table"}},
      { path: "datatable", component: DataTableComponent, data: {breadcrumb: "DataTable"}},   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tableRouter)],
  exports: [RouterModule]
})


export class TableRouterModule {}