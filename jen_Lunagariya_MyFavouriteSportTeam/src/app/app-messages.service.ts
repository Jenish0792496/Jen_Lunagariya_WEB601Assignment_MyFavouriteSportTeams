import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppMessagesService } from '../services/app-messages.service';

@Component({
  selector: 'app-messages',
  template: `
    <div class="messages">
      <div class="message" *ngFor="let message of messages">{{ message }}</div>
    </div>
  `,
  styles: [
    `
    .messages {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
    }

    .message {
      background-color: #fff;
      color: #000;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    `
  ]
})
export class AppMessagesComponent implements OnInit, OnDestroy {

  public messages: string[] = [];
  private messagesSub: Subscription;

  constructor(private appMessagesService: AppMessagesService) { }

  ngOnInit(): void {
    this.messagesSub = this.appMessagesService.messages$.subscribe(message => {
      this.messages.push(message);
      setTimeout(() => {
        this.messages.shift();
      }, 5000);
    });
  }

  ngOnDestroy(): void {
    this.messagesSub.unsubscribe();
  }

}
