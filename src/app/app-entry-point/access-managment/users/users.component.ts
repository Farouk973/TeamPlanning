import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint },
      

    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Users`,
    formEditData: `${environment.baseUrl}/meta/UpdateUserCommand`,
  };
  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Users`,
    formdata: `${environment.baseUrl}/meta/User`,
    metadata: `${environment.baseUrl}/meta/UserVm`,
    allowedSortColumns: ['name'],
    actionPanel: this.action,

  };

  config = {
    endpoint: `${environment.baseUrl}/api/Users`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    formdata: `${environment.baseUrl}/meta/CreateUserCommand`,
    formeditdata: `${environment.baseUrl}/meta/UpdateUserCommand`,
    pageSize: 2,
    title: 'Project Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  }
}
