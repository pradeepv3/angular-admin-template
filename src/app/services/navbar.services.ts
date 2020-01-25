import { Injectable, Inject, Renderer2, RendererFactory2  } from '@angular/core'
import { DOCUMENT } from '@angular/common';

@Injectable()
export class NarvBarServices {
  private renderer: Renderer2;
  largeDeviceWidth = 991;
  constructor ( 
                    @Inject(DOCUMENT) private document: Document,
                    rendererFactory: RendererFactory2
                    ) { 
                        this.renderer = rendererFactory.createRenderer(null, null);
                      }
  // Close all sidebars when resize usefull for responsive 
  closeSidenavbars() { 
    let headerNavElem: HTMLElement = this.document.getElementById('header-notification-nav') as HTMLElement;
    
     if(this.document.body.clientWidth > this.largeDeviceWidth ) {
        this.renderer.removeClass(this.document.body, 'show-sidebar-md');
        this.renderer.removeClass(this.document.body, 'content-overlay');
      }  
      if(headerNavElem.classList.contains('show')) { 
        this.renderer.removeClass(this.document.getElementById('header-notification-nav'), 'show');
      }
  }

  updateSidebar() {
    // On Click Hanburger Hide Notification Sidebar if it is Visible
    let headerNavElem: HTMLElement = this.document.getElementById('header-notification-nav') as HTMLElement;
    if(headerNavElem.classList.contains('show')) { 
      let element: HTMLElement = document.querySelector('.navbar-toggler') as HTMLElement;
      element.click();
     }

    const bodyElem = this.document.body;

    // On Click Hanburger icon Toggle Sidebar Based on devices
    if( bodyElem.clientWidth > this.largeDeviceWidth ) {
        (bodyElem.classList.contains('show-sidebar-lg')) ? this.renderer.removeClass(bodyElem, 'show-sidebar-lg') : this.renderer.addClass(bodyElem, 'show-sidebar-lg');      
    } 
    else {
      (bodyElem.classList.contains('show-sidebar-md'))  ?  this.renderer.removeClass(bodyElem, 'show-sidebar-md') : this.renderer.addClass(bodyElem, 'show-sidebar-md'); 
    } 
  }

  // Toggle Novification Sidebar
  toggleNotificaitionsidebar () {
      if(this.document.body.classList.contains('show-sidebar-md')) {
        this.renderer.removeClass(this.document.body, 'show-sidebar-md');  
      }

    (this.document.body.classList.contains('content-overlay')) ? this.renderer.removeClass(this.document.body, 'content-overlay') : this.renderer.addClass(this.document.body, 'content-overlay');
  }

  // Hide Sidebar Navigation on router change in Mobile and Tablet Devices
  hideSidebar() {
    if(this.document.body.clientWidth < this.largeDeviceWidth ) {
         this.renderer.removeClass(this.document.body, 'show-sidebar-md');
      }
  }
  
}