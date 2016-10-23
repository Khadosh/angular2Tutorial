import { Component } from '@angular/core';
import { CarParts } from './car-parts.model'
import { CARPARTS } from './car-parts.mocks'

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts/car-parts.component.html'
})

export class CarPartsComponent {
  totalCarParts() {
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0)
  }
  carParts : CarParts[]
  ngOnInit(){
    this.carParts = CARPARTS
  }
}