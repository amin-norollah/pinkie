import { Component } from '@angular/core';

import { IFullContents } from 'src/app/shared/interfaces/FullContent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  fullContent: IFullContents[] = [
    {
      id: 0,
      authorName: 'string',
      authorPhoto: 'string',
      location: 'string',
      likes: 10,
      comments: 20,
      description: 'string',
      photo: 'string',
      tags: ['dd', 'daa'],
    },
  ];

  constructor() {}
}
