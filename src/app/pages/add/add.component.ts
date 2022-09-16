import { Component, ViewEncapsulation } from '@angular/core';
import { IFullContents } from 'src/app/shared/interfaces/Content';

import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  /////////////////////////////////////////////
  //override the styles with your custom styles
  encapsulation: ViewEncapsulation.None,
})
export class AddComponent {
  faClose = faClose;
  faCheck = faCheck;

  content: IFullContents = {
    id: 0,
    authorId: 600, //todo
    authorName: 'string',
    authorPhoto: 'assets/eeff.png',
    location: 'string',
    likes: 10,
    comments: 20,
    description: '',
    photo: 'assets/eeff.png',
    tags: ['trend'],
  };

  separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  tags = new Set(['post']);
  formControl = new FormControl(['post']);

  addTagFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.tags.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeTag(tag: string) {
    this.tags.delete(tag);
  }
}
