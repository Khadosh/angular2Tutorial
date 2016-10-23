import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { CarPart } from './car-parts.model'

@Injectable()
export class CarPartsDataService {
  
  constructor(private http : Http){}

  getCarParts() {
    return this.http.get('app/car-parts/car-parts.json').map(response => <CarPart[]> response.json().data)
  }
}