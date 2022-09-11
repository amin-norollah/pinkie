import { Component, Input } from '@angular/core';
import {
  faHashtag,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
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

  constructor() {}

  @Input() content: IFullContents | any;
}
