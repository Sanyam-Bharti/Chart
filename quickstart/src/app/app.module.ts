import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChartComponent} from './chart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
