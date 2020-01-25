import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import {chartjsServices } from '../../services/chartjs.services'
import {Router} from '@angular/router'

@Component({
  selector: 'chartjs',
  templateUrl: './charjs.component.html'
})

export class ChartjsComponent implements OnInit, OnChanges {

  //
  constructor(private chartjserverices: chartjsServices, private router:Router){}
  @Output() addgraphItem = new EventEmitter();
  addnewItem() {
    this.addgraphItem.emit();
  }
  // Canvas Refrence
  @ViewChild('chartWrapper') chartWrapper : ElementRef;
  @ViewChild('chartjs') chartjs : ElementRef;

  @Input() chartId: string;
  @Input() chartType : string;
  @Input() chartHeight : string;
  @Input() chartWidth : string;
  @Input() chartLabels : string;
  @Input() chartDataset : string;
  @Input() chartOptions : string;
  @Input() chartLegend : string;
  
  public defaultChartOptions: any = {
    animation: false,
    responsive: false,
    maintainAspectRatio: false
  };

  ngOnChanges(chagens:SimpleChanges){
    //console.log(chagens);
    
    if(chagens.chartDataset.previousValue) {
      this.chartDataset = chagens.chartDataset.currentValue;
      this.onload();
      this.router.navigate(['/']);
    }
  }

  ngOnInit(){
      this.onload();   
  }  

    onload() {
       const obj = Object.assign({}, this.chartjserverices.lineChartData['options'], this.chartOptions);
      //console.log(obj);
      this.chartjs.nativeElement.height = this.chartHeight;
      //this.chartjs.nativeElement.width = "100%";
      new Chart(this.chartjs.nativeElement, {
        type: this.chartType,
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataset
        },
        options: 
          //this.chartjserverices.lineChartData['options'] || this.defaultChartOptions,
          this.chartOptions || this.defaultChartOptions,
        });
    }
}