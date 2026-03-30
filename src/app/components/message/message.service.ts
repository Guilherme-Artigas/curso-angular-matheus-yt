import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string = '';

  constructor() { }

  public showMessage(messageReceived: string): void {
    this.message = messageReceived;

    setTimeout(() => {
      this.clearMessage();
    }, 4000);
  }

  public clearMessage(): void {
    this.message = '';
  }
}
