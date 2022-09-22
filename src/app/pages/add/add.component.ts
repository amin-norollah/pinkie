import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { IFullContents } from 'src/app/shared/interfaces/Content';

import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons';
import { GenericService } from 'src/app/shared/services/generic.service';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { IUsers } from 'src/app/shared/interfaces/User';
import { Router } from '@angular/router';

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
    authorId: 0,
    authorName: '',
    authorPhoto: '',
    location: '',
    likes: 0,
    comments: 0,
    description: ' sd sd s d',
    photo: 'assets/eeff.png',
    tags: ['post'],
  };

  userProfile: IUsers | any;

  separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  tags = new Set(['post']);
  formControl = new FormControl(['post']);

  constructor(
    private gService: GenericService<IFullContents>,
    private dialog: MatDialog,
    private router: Router
  ) {
    const userId: number = +localStorage.getItem('selectedUserId')!;
    //loading current user information
    this.gService.getGeneric(`/api/users/${userId}`).subscribe({
      next: (data: any) => {
        this.userProfile = data;

        this.content.authorId = data.id;
        this.content.authorName = data.username;
        this.content.authorPhoto = data.photo;
        this.content.location = 'Earth';
      },
      error: (error: any) => {
        this.dialog.open(ControlDialogComponent, {
          data: {
            title: `${error.statusCode}`,
            message: error.message,
          },
        });
      },
    });
  }

  //////////////////////////////////////////
  // Tags
  addTagFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.tags.add(event.value);
      this.content.tags.push(event.value);
      event.chipInput!.clear();
    }
  }

  removeTag(tag: string) {
    this.tags.delete(tag);
    this.content.tags.filter((ele) => ele != tag);
  }

  //////////////////////////////////////////
  // posting new content
  PostItem() {
    this.gService.createGeneric(`/api/contents`, this.content).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        this.dialog.open(ControlDialogComponent, {
          data: {
            title: `${error.statusCode}`,
            message: error.message,
          },
        });
      },
    });
  }
}
