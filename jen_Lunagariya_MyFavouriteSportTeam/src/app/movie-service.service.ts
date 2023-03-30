import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSubject = new Subject<{ type: string, message: string }>();
  message$: Observable<{ type: string, message: string }> = this.messageSubject.asObservable();

  add(message: string, type: string = 'info') {
    this.messageSubject.next({ type, message });
  }

  clear() {
    this.messageSubject.next();
  }

  constructor() { }
}

