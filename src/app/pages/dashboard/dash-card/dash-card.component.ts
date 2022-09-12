import { Component, Input } from '@angular/core';
import {
  faHashtag,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { IComments } from 'src/app/shared/interfaces/Comment';
import { IFullContents } from 'src/app/shared/interfaces/FullContent';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css'],
})
export class DashCardComponent {
  faHashtag = faHashtag;
  faComment = faComment;
  faHeart = faHeart;

  areYouLiked: boolean = false;

  postComments: IComments[] = [
    {
      id: 1,
      authorName: 'author',
      authorUrl: 'string',
      authorPhoto: 'string',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  constructor() {}

  @Input() content: IFullContents | any;
}
