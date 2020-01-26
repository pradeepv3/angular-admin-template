import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Inject,
  OnInit,
  HostListener
} from "@angular/core";

import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd
} from "@angular/router";

import { DOCUMENT } from "@angular/common";
import { NarvBarServices } from "../../services/navbar.services";

@Component({
  templateUrl: "./app-layout.component.html"
})
export class AppLayoutComponent implements OnInit {
  loading;
  constructor(
    public navbarService: NarvBarServices,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.renderer.addClass(this.document.body, "show-sidebar-lg");
    this.loading = false;
  }

  onActivate() {
    this.navbarService.hideSidebar();
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  showloader() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }

  @HostListener("window:resize") onResize() {
    this.navbarService.closeSidenavbars();
  }

  ngOnInit() {
    console.log("ngoninit");
    this.showloader();
  }
}
