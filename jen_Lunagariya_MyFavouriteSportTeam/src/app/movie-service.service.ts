import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../models/content.model';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getContents(): Observable<Content[]> {
    return of(CONTENT);
  }

  getContentById(id: number): Observable<Content> {
    const content = CONTENT.find(c => c.id === id);
    return of(content);
  }

}
