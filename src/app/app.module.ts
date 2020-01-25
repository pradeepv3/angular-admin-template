import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

//import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { LayoutModule } from './_layout/layout.module';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { FormViewModule } from './view/forms/forms.module';
import { TablesModule } from './view/tables/tables.module';
import { IconsModule } from './view/icons/icons.module';
import { BasicComponent } from './view/basic-component/basicComponent.module';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ChartjsViewComponent } from './view/chartjs/chartjs.view.component';
import { LoginComponent } from './view/login/login.component'
import { RegisterComponent } from './view/register/register.component'
import { ForgotPasswordComponent } from './view/forgot-password/forgot.password.component'
import { WidgetsComponent } from './view/widgets/widgets.component'
import { ErrorPageComponent } from './view/error/error.component'

// Widget Component


// Pipes
import { FiltersPipe } from './pipes/search.pipe'
import { DefaultPipe } from './pipes/default.pipe'

// Services
import { chartjsServices } from './services/chartjs.services'
import { NarvBarServices } from './services/navbar.services'
import { TableServices } from './services/table.services'
import { TodoListServices } from './services/todo-list.services'

//Shared Module
import { SharedModule } from './shared/shared.module'


@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    DataTablesModule, 
    RouterModule, 
    SharedModule,
    AppRouterModule, 
    HttpClientModule,
    LayoutModule,
  ],
  declarations: [ 
    AppComponent, 
    FiltersPipe,
    DefaultPipe,
    DashboardComponent, 
    ChartjsViewComponent,
    ErrorPageComponent,
    LoginComponent ,
    RegisterComponent,
    ForgotPasswordComponent,
    WidgetsComponent,
  ],
  //exports: [AccordionModule],
  providers: [chartjsServices, NarvBarServices, TableServices, TodoListServices],
  bootstrap: [ AppComponent ]
})
export class AppModule { }