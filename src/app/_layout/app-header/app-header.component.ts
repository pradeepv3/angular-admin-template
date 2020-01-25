import { Component, OnInit, Output, EventEmitter, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import  { NarvBarServices } from '../../services/navbar.services'

@Component({
  selector: "app-header",
  templateUrl: './app-header.component.html'
})

export class AppHeaderComponent implements OnInit {
  brandName = "pradeepUI";
  @Output() sidebarUpdate = new EventEmitter<string>();
  
  onHanburgerClick() {
    this.sidebarUpdate.emit();
  }

  constructor( @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,
  private navbarService: NarvBarServices, ){}

  ngOnInit(){ }
}