import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size: number = 20;
  font: string = 'Arial';
  color: string = 'blue';
  classes: string[] = ['text-green', 'text-small'];

  constructor() { }

  ngOnInit(): void {
  }

}
