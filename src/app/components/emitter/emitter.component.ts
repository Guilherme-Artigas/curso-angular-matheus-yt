import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void {
    this.count = this.count + 1;
  }
}
