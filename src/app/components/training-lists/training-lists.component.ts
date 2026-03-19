import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/Car';
import { TrainingListsService } from './training-lists.service';

@Component({
  selector: 'app-training-lists',
  templateUrl: './training-lists.component.html',
  styleUrls: ['./training-lists.component.css']
})
export class TrainingListsComponent implements OnInit {
  listNames: string[] = ['Guilherme', 'Jamile', 'Rafaela', 'Julia', 'João'];
  listCars: Car[] = [];

  constructor(private trainingListService: TrainingListsService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  public getAllCars(): void {
    this.trainingListService.getAllCars().subscribe((cars) => this.listCars = cars);
  }

  public handleShowYear(car: Car): void {
    for (let c of this.listCars) {
      if (c.model === car.model) c.showYear = !c.showYear;
    }
  }

  public handleDeleteCar(car: Car, cars: Car[]): void {
    const newListCars: Car[] = this.trainingListService.handleDeleteCar(car, cars);
    this.listCars = newListCars;
  }
}
