import { Component } from '@angular/core';
import { CarPart } from './car-parts.model'
import { CarPartsDataService } from './car-parts.service'

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts/car-parts.component.html',
  styleUrls: ['app/car-parts/car-parts.css'],
})

export class CarPartsComponent {
  totalCarParts() {
    return Array.isArray(this.carParts) ? this.carParts.reduce((prev, current) => prev + current.inStock, 0) : null;
  }
  carParts : CarPart[]
  constructor(private carPartsDataService: CarPartsDataService) { }
  ngOnInit(CarPartsDataService){
    this.carPartsDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
  }
  upQuantity (carPart) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }
  downQuantity (carPart) {
    if (carPart.quantity > 0) carPart.quantity--;
  }
}