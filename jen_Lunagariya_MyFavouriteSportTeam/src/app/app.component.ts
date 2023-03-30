import { Component } from '@angular/core';
import { AppMessagesService } from './services/app-messages.service';

@Component({
  selector: 'app-root',
  template: `
    <app-messages></app-messages>
    <input type="number" [(ngModel)]="itemId">
    <button (click)="getItem()">Get Item</button>
    <app-content-list></app-content-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public itemId: number;

  constructor(private appMessagesService: AppMessagesService) { }

  public getItem(): void {
    if (!this.itemId || this.itemId < 0 || this.itemId >= this.moviesService.getMovies().length) {
      this.appMessagesService.addMessage('Error: Invalid ID');
      return;
    }
    const item = this.moviesService.getMovieById(this.itemId);
    if (item) {
      this.appMessagesService.addMessage(`Content Item at id: ${this.itemId}`);
    } else {
      this.appMessagesService.addMessage('Error: Item not found');
    }
  }

}
