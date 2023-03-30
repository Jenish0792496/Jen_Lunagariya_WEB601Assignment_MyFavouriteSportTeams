
import {Content} from "../helper files/content-interface";
// @ts-ignore
import { contentDb } from "../helper-files/contentDb.ts";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getContents().subscribe(contents => {
      this.contents = contents;
    });

    searchTerm: string;

     result: string;





  search() {
    const foundIndex = this.contentArray.findIndex(content => content.title === this.searchTerm);
    if (foundIndex >= 0) {
      this.highlightIndex = foundIndex;
      this.searchResult = 'found';
    } else {
      this.searchResult = 'not found';
    }
  }
  addContent(content: Content) {
    this.contents.push(content);
  }

  ngOnInit() {
    this.addContentPromise = new Promise((resolve, reject) => {
      this.resolveAddContent = resolve;
      this.rejectAddContent = reject;
    });

    this.addContentPromise.then((content: Content) => {
      this.addContent(content);
      console.log(`Content with title "${content.title}" successfully added.`);
      this.errorMsg = '';
    }).catch((error: string) => {
      this.errorMsg = error;
    });
  }

}


