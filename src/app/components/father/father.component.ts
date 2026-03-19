import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  public text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public receivedValue(textReceived: string): void {
    this.text = textReceived;
  }
}
