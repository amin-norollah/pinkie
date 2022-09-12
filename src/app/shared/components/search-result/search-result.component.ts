import { Component, Input } from '@angular/core';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { IListContents } from 'src/app/shared/interfaces/FullContent';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  faHeart = faHeart;
  faComment = faComment;

  @Input() content: IListContents[] = [];

  constructor() {}

  //dialog with complete data
  itemClicked(id: number) {
    console.log(`id: ${id}`);
  }
}
