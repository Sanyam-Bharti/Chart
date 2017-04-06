"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.options = { height: 200, width: 200, type: 'bar', xLabel: 'Months', yLabel: 'Trainings' };
        this.data = [
            { xAxis: "Jan", yAxis: 50, details: { name: 'Pankaj', designation: 'Consultant' } },
            { xAxis: "Feb", yAxis: 60, details: { name: 'Adit', designation: 'Consultant' } },
            { xAxis: "Mar", yAxis: 80, details: { name: 'Nagar', designation: 'SE' } },
            { xAxis: "Apr", yAxis: 30, details: { name: 'Sanyam', designation: 'SE' } },
            { xAxis: "May", yAxis: 70, details: { name: 'Varun', designation: 'SSE' } }
        ];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Bar Chart</h1>\n  <chart [options]=options  [data]=data>\n  </chart>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map