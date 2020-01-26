import { Component } from "@angular/core";

@Component({
  templateUrl: "./pagination.component.html"
})
export class PaginationComponent {
  totalItems = 64;
  currentPage = 4;
  smallnumPages: number = 0;
  showBoundaryLinks = true;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
  pageChanged(event: any): void {
    console.log("Page changed to: " + event.page);
    console.log("Number items per page: " + event.itemsPerPage);
  }
}
