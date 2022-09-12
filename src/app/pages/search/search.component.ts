import { Component } from '@angular/core';
import { IListContents } from 'src/app/shared/interfaces/FullContent';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  faHeart = faHeart;
  faComment = faComment;

  searchContent: IListContents[] = [
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

  //dialog with complete data
  itemClicked(id: number) {
    console.log(`id: ${id}`);
  }
}
