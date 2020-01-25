import { Component } from "@angular/core";

import { TableServices } from "../../services/table.services";
import { TodoListServices } from "../../services/todo-list.services";

@Component({
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  userData: any;

  constructor(private tableData: TableServices) {
    this.userData = tableData.tableData;
  }

  randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

  // line chart data
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom"
    }
  };

  lineChartData: Array<any> = [
    {
      data: [1, 22, 4, 25, 8, 5],
      label: "Africa",
      borderColor: "#3e95cd",
      borderWidth: 1,
      fill: true
    },
    {
      data: [17, 7, 58, 4, 24, 5],
      label: "Asia",
      borderColor: "#8e5ea2",
      borderWidth: 1,
      fill: false
    }
  ];

  public lineChartLabels: Array<any> = [1, 2, 3, 4, 5, 6];
  public lineChartLegend = true;

  // Bar Chart Data
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom"
    }
  };
  public barChartLabels: string[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartLegend = true;
  public barChartData: any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: "Series A",
      backgroundColor: "#FF9EB3"
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: "Series B",
      backgroundColor: "#9AD0F5"
    }
  ];

  // Doughnut Chart Data
  public doughnutChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true,
      position: "right"
    }
  };
  public doughnutChartLabels: string[] = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue"
  ];
  public doughnutChartData: any[] = [
    {
      data: [
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor(),
        this.randomScalingFactor()
      ],
      backgroundColor: ["#FF3D67", "#FF9124", "#FFC233", "#22CECE", "#059BFF"],
      label: "Dataset 1"
    }
  ];
}
