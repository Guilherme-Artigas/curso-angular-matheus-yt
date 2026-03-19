import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Output() event = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public sendEvent(): void {
    this.event.emit('Olá eu estou sendo enviado do componente filho.');
  }
}
