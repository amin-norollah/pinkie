import { Component } from '@angular/core';
import { IListContents } from 'src/app/shared/interfaces/Content';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { GenericService } from 'src/app/shared/services/generic.service';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  faHeart = faHeart;
  faComment = faComment;

  searchContent: IListContents[] = [];

  constructor(
    private gService: GenericService<IListContents>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.gService.getGeneric(`/api/contents`, '').subscribe({
      next: (data: any) => {
        this.searchContent = data;
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

  //dialog with complete data
  itemClicked(id: number) {
    console.log(`id: ${id}`);
  }
}
