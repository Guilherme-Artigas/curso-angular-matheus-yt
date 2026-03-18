import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receivedValue(textReceived: string): void {
    this.text = textReceived;
  }
}
