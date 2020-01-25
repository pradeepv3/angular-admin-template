import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { DataTablesModule } from 'angular-datatables';

import { TableRouterModule } from './tables.router.module'
import { BasicTableComponent } from './basic/basictable.component'
import { DataTableComponent } from './datatable/datatable.component'

@NgModule({
  imports: [
    CommonModule,
    TableRouterModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    BasicTableComponent,
    DataTableComponent
  ],
  exports: [
    BasicTableComponent,
    DataTableComponent
  ]
})
export class TablesModule {
  
}