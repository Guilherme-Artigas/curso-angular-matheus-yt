import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  showMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleMessage(): void {
    this.showMessage = !this.showMessage;
  }
}
