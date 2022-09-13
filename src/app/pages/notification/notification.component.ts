import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { INotifications } from 'src/app/shared/interfaces/Notifications';
import { GenericService } from 'src/app/shared/services/generic.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notifies: INotifications[] = [];

  constructor(
    private gService: GenericService<INotifications>,
    private dialog: MatDialog
  ) {}

  //todo : set selected user in cookie
  ngOnInit(): void {
    this.gService.getGeneric(`/api/notifies`, `?userId=${600}`).subscribe({
      next: (data: any) => {
        this.notifies = data;
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
