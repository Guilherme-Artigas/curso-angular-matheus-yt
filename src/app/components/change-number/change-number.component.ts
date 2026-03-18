import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCount(): void {
    this.changeNumber.emit();
  }
}
