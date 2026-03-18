import { Injectable } from '@angular/core';
import { Car } from 'src/app/interfaces/Car';

@Injectable({
  providedIn: 'root'
})
export class TrainingListsService {

  constructor() { }

  handleDeleteCar(car: Car, cars: Car[]): Car[] {
    const newListCars: Car[] = cars.filter((c) => c.model !== car.model);

    return newListCars;
  }
}
