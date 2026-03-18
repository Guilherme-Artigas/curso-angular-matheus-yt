import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-pipes',
  templateUrl: './training-pipes.component.html',
  styleUrls: ['./training-pipes.component.css']
})
export class TrainingPipesComponent implements OnInit {
  name: string = 'guilherme';
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
