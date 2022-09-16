import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from 'src/app/shared/components/dialog/dialog.component';

import { IFullContents } from 'src/app/shared/interfaces/Content';
import { GenericService } from 'src/app/shared/services/generic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  fullContent: IFullContents[] = [];

  constructor(
    private gService: GenericService<IFullContents>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.gService.getGeneric(`/api/contents`).subscribe({
      next: (data: any) => {
        this.fullContent = data;
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
