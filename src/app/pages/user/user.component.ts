import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { IListContents } from 'src/app/shared/interfaces/Content';
import { IUsers } from 'src/app/shared/interfaces/User';
import { GenericService } from 'src/app/shared/services/generic.service';

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

  userContents: IListContents[] = [];

  constructor(
    private gService: GenericService<IListContents>,
    private dialog: MatDialog
  ) {}

  //todo : set selected user in cookie
  ngOnInit(): void {
    this.gService.getGeneric(`/api/contents`, `?authorId=${600}`).subscribe({
      next: (data: any) => {
        this.userContents = data;
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
