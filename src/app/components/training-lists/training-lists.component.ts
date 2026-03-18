import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/Car';

@Component({
  selector: 'app-training-lists',
  templateUrl: './training-lists.component.html',
  styleUrls: ['./training-lists.component.css']
})
export class TrainingListsComponent implements OnInit {
  listNames: string[] = ['Guilherme', 'Jamile', 'Rafaela', 'Julia', 'João'];
  listCars: Car[] = [
    {
      color: 'Verde escuro',
      model: 'Palio',
      year: 2007,
      showYear: false,
    },
    {
      color: 'Azul',
      model: 'Tera',
      year: 2025,
      showYear: false,
    },
    {
      color: 'Branco',
      model: 'Fiesta',
      year: 2015,
      showYear: false,
    },
    {
      color: 'Cinza',
      model: 'HB20',
      year: 2020,
      showYear: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleShowYear(car: Car): void {
    for (let c of this.listCars) {
      if (c.model === car.model) c.showYear = !c.showYear;
    }
  }
}
