import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './common/app.component';
import { CarPartsComponent }   from './car-parts/car-parts.component';
import { CarPartsDataService }   from './car-parts/car-parts.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, CarPartsComponent ],
  bootstrap:    [ AppComponent, CarPartsComponent ],
  providers:    [CarPartsDataService]
})

export class AppModule { }
