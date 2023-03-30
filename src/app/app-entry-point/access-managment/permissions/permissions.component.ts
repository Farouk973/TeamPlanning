import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar } from 'src/shared/generic/models/Calendar.model';
import { Container } from 'src/shared/generic/models/Container.model';
import { Form } from 'src/shared/generic/models/Form.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
import { SelectOrder } from 'src/shared/generic/models/SelectOrder.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
import { Permission } from 'src/shared/models/permission.model';
import { PermissionService } from 'src/shared/services/permission.service';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
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

   openOrderDialog() {
    this.dialog.open(OrderDialogComponent, {
      
    });
  }
  getMenu() {
    this.permissionService.getMenu().subscribe({
      next: (data) => {
        this.menu = data;
      },
    })
  }
  action: Actionpanel = {
    endpoint: 'https://localhost:44312/api/Permission',
    formEditData: 'https://localhost:44312/meta/UpdatePermissionCommand',
  };

  grid: GridView = {
    endpoint: 'https://localhost:44312/api/Permission',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    metadata: 'https://localhost:44312/meta/GetPermissionListVm',
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };
  

  select : SelectOrder = {
    endpointData : 'https://localhost:44312/api/Permission',
    endpointAction : 'https://localhost:44312/api/Permission/ordre',
    InterfaceName : 'change menu order',
    TaskSelectCollumn : 'name',
  };

  config = {
    endpoint: 'https://localhost:44312/api/Permission',
    metadata: 'https://localhost:44312/meta/GetPermissionListVm',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    formeditdata: 'https://localhost:44312/meta/UpdatePermissionCommand',
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

  