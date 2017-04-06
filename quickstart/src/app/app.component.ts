import { Component, OnInit } from '@angular/core';
import { IChart } from "./Interfaces/chart";
import { ChartOptions } from "./Interfaces/chartOptions";
import { ChartData } from "./Interfaces/chartData";

@Component({
  selector: 'my-app',

  template: `<h1>Bar Chart</h1>
  <chart [options]=options  [data]=data>
  </chart>
  `,
})
export class AppComponent implements IChart, OnInit {
    options: ChartOptions;
    data: ChartData[];

  ngOnInit():void{
    this.options={ height: 200, width: 200, type: 'bar', xLabel: 'Months', yLabel: 'Trainings' };

    this.data=[
      {xAxis:"Jan",yAxis:50,details:{name:'Pankaj',designation:'Consultant'}},
      {xAxis:"Feb",yAxis:60,details:{name:'Adit',designation:'Consultant'}},
      {xAxis:"Mar",yAxis:80,details:{name:'Nagar',designation:'SE'}},
      {xAxis:"Apr",yAxis:30,details:{name:'Sanyam',designation:'SE'}},
      {xAxis:"May",yAxis:70,details:{name:'Varun',designation:'SSE'}}
    ]
  }

}
