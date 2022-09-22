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
    id: 0,
    username: '',
    name: '',
    family: '',
    photo: 'assets/eeff.png',
    description: '',
  };

  userContents: IListContents[] = [];

  constructor(
    private gService: GenericService<IListContents>,
    private dialog: MatDialog
  ) {}

  //todo : set selected user in cookie
  ngOnInit(): void {
    const userId: number = +localStorage.getItem('selectedUserId')!;
    //loading user
    this.gService.getGeneric(`/api/users/${userId}`).subscribe({
      next: (data: any) => {
        this.userProfile = data;
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

    //loading content
    this.gService.getGeneric(`/api/contents?authorId=${userId}`).subscribe({
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
