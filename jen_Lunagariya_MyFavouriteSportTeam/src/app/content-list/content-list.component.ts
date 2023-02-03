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
      title: 'Title 1',
      description: 'Description 1',
      creator: 'Creator 1',
      imgURL: 'https://image-url-1.com',
      type: 'Type 1',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      creator: 'Creator 2',
      imgURL: 'https://image-url-2.com',
      type: 'Type 2',
      tags: ['Tag 2.1', 'Tag 2.2', 'Tag 2.3']
    },
    {
      id: 3,
      title: 'Content 3',
      description: 'Description for Content 3',
      creator: 'Creator 3',
      imgURL: 'https://picsum.photos/id/3/200/300',
      type: 'Type 3',
      tags: ['Tag 7', 'Tag 8', 'Tag 9'],
    },
    {
      id: 4,
      title: 'Content 4',
      description: 'Description for Content 4',
      creator: 'Creator 4',
      imgURL: 'https://picsum.photos/id/4/200/300',
      type: 'Type 4',
      tags: ['Tag 10', 'Tag 11', 'Tag 12'],
    },
    {
      id: 5,
      title: 'Content 5',
      description: 'Description for Content 5',
      creator: 'Creator 5',
      imgURL: 'https://picsum.photos/id/5/200/300',
      type: 'Type 5',
      tags: ['Tag 13', 'Tag 14', 'Tag 15'],
    },
    {
      id: 6,
      title: 'Content 6',
      description: 'Description for Content 6',
      creator: 'Creator 6',
      imgURL: 'https://picsum.photos/id/5/200/300',
      type: 'Type 6',
      tags: ['Tag 16', 'Tag 17', 'Tag 18'],
    },
  ];


}
