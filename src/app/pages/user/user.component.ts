import { Component } from '@angular/core';
import { IListContents } from 'src/app/shared/interfaces/FullContent';
import { IUsers } from 'src/app/shared/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userProfile: IUsers = {
    id: 4,
    username: 'string',
    name: 'string',
    family: 'string',
    photo: 'assets/eeff.png',
    description: 'string',
  };

  userContents: IListContents[] = [
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
    {
      id: 0,
      likes: 10,
      comments: 12,
      photo: 'assets/eeff.png',
    },
  ];

  constructor() {}
}
