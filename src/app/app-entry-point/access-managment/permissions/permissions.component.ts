import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar } from 'src/shared/generic/models/Calendar.model';
import { Container } from 'src/shared/generic/models/Container.model';
import { Form } from 'src/shared/generic/models/Form.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
import { Permission } from 'src/shared/models/permission.model';
import { PermissionService } from 'src/shared/services/permission.service';
export interface PeriodicElement {
  name: string;
  title: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})

export class PermissionsComponent implements OnInit {
  menu!: Permission[];
 
  constructor(private permissionService: PermissionService,private fb: FormBuilder,public dialog: MatDialog
     ) 
          { }

  ngOnInit() {
    this.getMenu();
   }
  getMenu() {
    this.permissionService.getMenu().subscribe({
      next: (data) => {
        this.menu = data;
      },
    })
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
  };

  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };

  config = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    formeditdata: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
    pageSize: 2,
    title: 'Project Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };

  openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint },
      

    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}

  