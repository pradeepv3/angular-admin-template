import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppLayoutComponent } from './app-layout/app-layout.component'; 
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppDropDownMenuComponent  } from './app-dropdownmenu/app-dropdownmenu.component';

import { BreadcrumbComponent } from '../component/breadcrumb/breadcrumb.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent, 
    AppFooterComponent, 
    AppSidebarComponent,
    AppDropDownMenuComponent,
    BreadcrumbComponent
    ],
  exports: [
    AppLayoutComponent,
    AppHeaderComponent, 
    AppFooterComponent, 
    AppSidebarComponent,
    AppDropDownMenuComponent,
    BreadcrumbComponent
  ]
})

export class LayoutModule{}