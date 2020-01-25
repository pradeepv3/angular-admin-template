import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http';

import { TableServices } from '../../../services/table.services'

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  templateUrl: './datatable.component.html'
})
export class DataTableComponent implements OnInit{
  userData:any = "";
  persons: Person[];
  dtOptions: DataTables.Settings = {};
  dtAjaxOptions: DataTables.Settings = {};

  constructor( private tableServices: TableServices, private http: HttpClient) {
    this.userData = tableServices.tableData;
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    const that = this;

    this.dtAjaxOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };

  }
}