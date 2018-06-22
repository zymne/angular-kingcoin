import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(text: string): void {
    this.messages.push(text);
  }

  clear(): void {
    this.messages = [];
  }

}
