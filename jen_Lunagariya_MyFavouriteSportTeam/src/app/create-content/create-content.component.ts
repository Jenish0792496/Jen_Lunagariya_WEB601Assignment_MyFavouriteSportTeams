import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-create-content',
  template: `
    <div>
      <h2>Create New Content</h2>
      <div class="form-group">
        <label for="id">ID</label>
        <input type="text" class="form-control" id="id" [(ngModel)]="newContent.id" name="id" required>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" [(ngModel)]="newContent.title" name="title" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" [(ngModel)]="newContent.description" name="description" required>
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <select class="form-control" id="type" [(ngModel)]="newContent.type" name="type" required>
          <option value="">Select Type</option>
          <option *ngFor="let type of types" [value]="type">{{ type }}</option>
        </select>
      </div>
      <button class="btn btn-primary" (click)="onSubmit()">Submit</button>
      <p *ngIf="errorMessage" style="color:red; font-weight:bold">{{ errorMessage }}</p>
    </div>
  `,
})
export class CreateContentComponent {
  newContent: Content = new Content();
  types: string[] = ['Article', 'Blog Post', 'Video', 'Podcast'];
  errorMessage: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  onSubmit() {
    if (!this.newContent.id || !this.newContent.title || !this.newContent.description || !this.newContent.type) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }
    this.errorMessage = '';
    const promise = new Promise((resolve, reject) => {
      this.contentAdded.emit(this.newContent.clone());
      resolve();
    });
    promise
      .then(() => {
        console.log(`Added content: ${this.newContent.title}`);
        this.newContent = new Content();
      })
      .catch(() => {
        this.errorMessage = 'Failed to add content';
      });
  }
}
