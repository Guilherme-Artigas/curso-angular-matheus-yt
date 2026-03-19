import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public showMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public handleMessage(): void {
    this.showMessage = !this.showMessage;
  }
}
