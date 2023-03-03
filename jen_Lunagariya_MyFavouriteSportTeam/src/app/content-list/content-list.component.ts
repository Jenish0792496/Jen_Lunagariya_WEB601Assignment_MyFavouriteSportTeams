import { Component } from '@angular/core';
import {Content} from "../helper files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contents: Content[] = [
    {
      id: 1,
      title: 'Rohit Sharma',
      description: 'opner batsman',
      creator: 'IPL',
      type: 'Team member',
      tags: ['Tag 1']
    },
    {
      id: 2,
      title: 'Shuresh Raina',
      description: 'Batsman',
      creator: 'IPL',
      imgURL: 'https://search.brave.com/images?q=shuresh+raina&source=web&img=2',
      type: 'Captain',
      tags: ['Tag 2']
    },
    {
      id: 3,
      title: 'Virat Kohli',
      description: 'Batsman',
      creator: 'IPL',
      imgURL: 'https://search.brave.com/images?q=virat+kohli&source=web&img=1',
      type: 'Second Captain',
      tags: ['Tag 3']
    },
    {
      id: 4,
      title: 'M.S Dhoni',
      description: 'Keeper',
      creator: 'IPL',
      imgURL: 'https://search.brave.com/images?q=DHoni&source=web&img=0',
      type: 'Back',
      tags: ['Tag 4']
    },
    {
      id: 5,
      title: 'Tendulkar',
      description: 'Bowler',
      creator: 'ILP',
      imgURL: 'https://search.brave.com/images?q=Tendulkar&source=web&img=1',
      type: 'Heandler',
      tags: ['Tag 5']
    },
    {
      id: 6,
      title: 'Rahul',
      description: 'Bowler',
      creator: 'IPL',
      imgURL: 'https://search.brave.com/images?q=rahul+dravid&source=web&img=2',
      type: 'Team member',
      tags: ['Tag 7']
    },
    {
      id: 7,
      title: 'Jenish',
      description: 'all rounder',
      creator: 'IPL',
      imgURL: 'https://search.brave.com/images?q=rahul+dravid&source=web&img=3',
      tags: ['Tag 8']
    },
  ];
  searchTerm: string;
  result: string;

  constructor() { }

  ngOnInit() {
  }

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


