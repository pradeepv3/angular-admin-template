import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component'
import { DashboardComponent } from './view/dashboard/dashboard.component'
import { ChartjsViewComponent } from './view/chartjs/chartjs.view.component'
import { LoginComponent } from './view/login/login.component'
import { RegisterComponent } from './view/register/register.component'
import { ErrorPageComponent } from './view/error/error.component'
import { ForgotPasswordComponent } from './view/forgot-password/forgot.password.component'
import { WidgetsComponent } from './view/widgets/widgets.component'

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
   {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  { 
    path: "",
    component: AppLayoutComponent , 
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "chartjs", component: ChartjsViewComponent, data: {breadcrumb: "ChartJs" }},
      { path: "widgets",   component: WidgetsComponent },
      { path: "forms", loadChildren: './view/forms/forms.module#FormViewModule', data: {breadcrumb: "Form"}},
      { path: "table", loadChildren: './view/tables/tables.module#TablesModule', data: {breadcrumb: "Table"}},
      { path: "icons", loadChildren: './view/icons/icons.module#IconsModule', data: {breadcrumb: "Icons"}},
      { path: "basiccomponent", loadChildren: './view/basic-component/basicComponent.module#BasicComponent', data: { breadcrumb: "Basic Component"}}
    ]
  },
  
  { path: "**", component: ErrorPageComponent, data: {breadcrumb: "Error"}}  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouterModule { }