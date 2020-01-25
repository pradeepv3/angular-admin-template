import { Component } from '@angular/core'
import { TableServices } from '../../../services/table.services'


@Component({
  templateUrl: "./basictable.component.html"
})
export class BasicTableComponent {
  tableData :any[];
  searchname = "";
  constructor( private tableServices: TableServices){
    this.tableData = this.tableServices.tableData;
  }
  
}