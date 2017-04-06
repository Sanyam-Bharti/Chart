"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var chartOptions_1 = require("./Interfaces/chartOptions");
var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.optionVals = this.options;
        this.dataVal = this.data;
        // console.log(this.dataVal);
        this.genarateGraph();
    };
    ChartComponent.prototype.transformData = function () {
        var yAxisArr = [];
        for (var index in this.dataVal) {
            console.log(this.dataVal[index].yAxis);
            yAxisArr.push(this.dataVal[index].yAxis);
        }
        return yAxisArr;
    };
    ChartComponent.prototype.drawBarChart = function () {
        this.title = 'Bar Chart';
        var data = this.transformData();
        console.log(data);
        var margin = { top: 30, right: 30, bottom: 10, left: 20 };
        var width = this.optionVals.width - margin.left - margin.right;
        var height = this.optionVals.height - margin.top - margin.bottom;
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
        y.domain([0, d3.max(data, function (d) { return d; })]);
        var group = chart.selectAll('g')
            .data(data)
            .enter().append('g')
            .attr('transform', function (d, i) { return 'translate(' + (i * barwidth + margin.left) + ',0)'; });
        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + (margin.left) + "," + height + ")")
            .call(xAxis);
        chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(yAxis);
        var rect = group.append('rect')
            .attr("x", function (d) { return x(d.xAxis); })
            .attr("y", function (d) { return y(d); })
            .attr("height", function (d) { return height - y(d); })
            .attr("width", barwidth - 5)
            .style("fill", "steelblue");
    };
    ;
    ChartComponent.prototype.genarateGraph = function () {
        if (this.optionVals && this.dataVal) {
            if (this.optionVals.type.toLowerCase() === 'bar') {
                this.drawBarChart();
            }
            else if (this.optionVals.type.toLowerCase() === 'pie') {
            }
        }
        else {
            throw Error("chart contract not valid!!!");
        }
    };
    return ChartComponent;
}());
__decorate([
    core_2.Input(),
    __metadata("design:type", chartOptions_1.ChartOptions)
], ChartComponent.prototype, "options", void 0);
__decorate([
    core_2.Input(),
    __metadata("design:type", Array)
], ChartComponent.prototype, "data", void 0);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        template: " \n    <h2>{{title}}</h2>\n    <svg class='chart'>\n    </svg>\n  "
    })
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map