import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './common/app.component';
import { CarPartsComponent }   from './car-parts/car-parts.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CarPartsComponent ],
  bootstrap:    [ AppComponent, CarPartsComponent ]
})

export class AppModule { }
