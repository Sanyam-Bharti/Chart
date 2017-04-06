import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IChart } from "./Interfaces/chart";
import { ChartData } from "./Interfaces/chartData";
import { ChartOptions } from "./Interfaces/chartOptions";
declare var d3: any;

@Component({
    selector: 'chart',
    template: ` 
    <h2>{{title}}</h2>
    <svg class='chart'>
    </svg>
  `
})
export class ChartComponent {
    @Input() options: ChartOptions;
    @Input() data: ChartData[];

    optionVals: ChartOptions;
    dataVal: ChartData[];
    title: string;

    ngOnInit() {
        this.optionVals = this.options;
        this.dataVal = this.data;
        // console.log(this.dataVal);
        this.genarateGraph();
    }

    transformData(): Array<number> {
        let yAxisArr = [];

        for (let index in this.dataVal) {
            console.log(this.dataVal[index].yAxis);
            yAxisArr.push(this.dataVal[index].yAxis);
        }
        return yAxisArr;
    }

    drawBarChart(): void {
        this.title = 'Bar Chart';
        let data = this.transformData();
        

        console.log(data);

        let margin = { top: 30, right: 30, bottom: 10, left: 20 };
        let width = this.optionVals.width - margin.left - margin.right;
        let height = this.optionVals.height - margin.top - margin.bottom;

        var barwidth = width / data.length;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");


        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        // var y = d3.scale.linear()
        //     .range([height, 0]);

        var chart = d3.select('.chart')
            .attr('width', this.optionVals.width)
            .attr('height', this.optionVals.height);

        x.domain(this.dataVal.map(function (d) { return d.xAxis; }));
        y.domain([0, d3.max(data, function (d: any) { return d; })]);


        var group = chart.selectAll('g')
            .data(data)
            .enter().append('g')
            .attr('transform', function (d: any, i: any) { return 'translate(' + (i * barwidth + margin.left) + ',0)' })

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate("+(margin.left)+"," + height + ")")
            .call(xAxis);  

        chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(yAxis);


        var rect = group.append('rect')
            .attr("x", function(d:any) { return x(d.xAxis); })
            .attr("y", function (d: any) { return y(d); })
            .attr("height", function (d: any) { return height - y(d); })
            .attr("width", barwidth-5)
            .style("fill", "steelblue");

    };

    genarateGraph(): void {
        if (this.optionVals && this.dataVal) {
            if (this.optionVals.type.toLowerCase() === 'bar') {
                this.drawBarChart();
            } else if (this.optionVals.type.toLowerCase() === 'pie') {
                //TODO: call function to draw pie chart.
            }
        } else {
            throw Error("chart contract not valid!!!");
        }
    }



}