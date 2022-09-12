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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      photo: 'string',
      tags: ['dd', 'daa'],
    },
    {
      id: 0,
      authorName: 'string',
      authorPhoto: 'string',
      location: 'string',
      likes: 10,
      comments: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      photo: 'string',
      tags: ['dd', 'daa'],
    },
    {
      id: 0,
      authorName: 'string',
      authorPhoto: 'string',
      location: 'string',
      likes: 10,
      comments: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      photo: 'string',
      tags: ['dd', 'daa'],
    },
  ];

  constructor() {}
}
