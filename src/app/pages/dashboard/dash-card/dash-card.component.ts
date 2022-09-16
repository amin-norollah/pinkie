import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faHashtag,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { IComments } from 'src/app/shared/interfaces/Comment';
import { IFullContents } from 'src/app/shared/interfaces/Content';
import { GenericService } from 'src/app/shared/services/generic.service';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css'],
})
export class DashCardComponent implements OnInit {
  faHashtag = faHashtag;
  faComment = faComment;
  faHeart = faHeart;

  areYouLiked: boolean = false;

  postComments: IComments[] = [];

  @Input() content: IFullContents | any;

  constructor(
    private gService: GenericService<IComments>,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.gService
      .getGeneric(`/api/comments?postId=${this.content.id}`)
      .subscribe({
        next: (data: any) => {
          this.postComments = data;
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
