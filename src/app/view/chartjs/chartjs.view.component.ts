import { Component, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core"

@Component({
  templateUrl: './chartjs.view.component.html'
})

export class ChartjsViewComponent  {

  randomScalingFactor (){
    return Math.round(Math.random() * 100);
  }

 

  // line chart data
  public lineChartOptions : any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  lineChartData = [
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


  addnewItem() {
    console.log(this.lineChartData);
      this.lineChartData.push({ 
        data: [1, 7, 23, 44, 24, 54],
        label: "nz",
        borderColor: "#8e5ea2",
        borderWidth: 1,
        fill: false
      });
    this.lineChartData = Object.assign([],this.lineChartData);
    //alert("event emmited");
    //this.lineChartData.push();

    console.log(this.lineChartData);
      /// your changes in the binding
  }

  public lineChartLabels: Array<any> = [1,2,3,4,5,6];
  public lineChartLegend = true;
  

  // Bar Chart Data
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLegend = true;
  public barChartData: any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A',
      backgroundColor: '#FF9EB3',
    },
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor: '#9AD0F5'}
  ];

 
  // Doughnut Chart Data
   public doughnutChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public doughnutChartLabels: string[] = ['Red','Orange','Yellow','Green','Blue'];
  public doughnutChartData: any[] = [{
					data: [
						this.randomScalingFactor(),
						this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
					],
					backgroundColor: ["#FF3D67","#FF9124","#FFC233","#22CECE","#059BFF"],
					label: 'Dataset 1'
				}];
  
  // PIE Chart Data
  public pieChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public pieChartLabels: string[] = ['Red','Orange','Yellow','Green','Blue'];
  public pieChartData: any[] = [{
					data: [
						this.randomScalingFactor(),
						this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
					],
					backgroundColor: ["#FF3D67","#FF9124","#FFC233","#22CECE","#059BFF"],
					label: 'Dataset 1'
				}];

  // Polar Chart Data
  public polarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public polarChartLabels: string[] = ['Red','Orange','Yellow','Green','Blue'];
  public polarChartData: any[] = [{
					data: [
						this.randomScalingFactor(),
						this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor(),
            this.randomScalingFactor()
					],
					//backgroundColor: ["#FF3D67","#FF9124","#FFC233","#22CECE","#059BFF"],
					label: 'Dataset 1'
				}];
  
  
  // Radar Chart Data
  public radarChartOptions: any = {
    legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Chart.js Radar Chart'
				},
				scale: {
					ticks: {
						beginAtZero: true
					}
				}
  };
  
}