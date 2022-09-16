import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  faHome,
  faSearch,
  faHeart,
  faUser,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';
import { ControlDialogComponent } from './shared/components/dialog/dialog.component';
import { IUsers } from './shared/interfaces/User';
import { GenericService } from './shared/services/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faHeart = faHeart;
  faUser = faUser;
  faAdd = faAdd;

  selected: number = 0;

  users: IUsers[] = [];
  selectedUser: number = -1;

  constructor(
    private gService: GenericService<IUsers>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.gService.getGeneric(`/api/users`).subscribe({
      next: (data: any) => {
        this.users = data;
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

  ChangedRoute(s: number) {
    this.selected = s;
  }

  //change user
  UserChanged(event: any) {
    const selectedUser: string = event.value.toString();
    localStorage.setItem('selectedUserId', selectedUser);
    window.location.reload();
  }
}
