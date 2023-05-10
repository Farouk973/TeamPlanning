import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderDialogComponent} from "../../access-managment/permissions/order-dialog/order-dialog.component";
import {DialogComponent} from "../../../../shared/generic/nxm-dialog/dialog/dialog.component";
import {Actionpanel, ActionPannelItem} from "../../../../shared/generic/models/ActionPanel.model";
import {environment} from "../../../../environments/environment";
import {GridAction, GridView} from "../../../../shared/generic/models/GridView.model";
import {ItemComponent} from "../../access-managment/permissions/item/item.component";
import {SelectOrder} from "../../../../shared/generic/models/SelectOrder.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openOrderDialog() {
    this.dialog.open(OrderDialogComponent, {

    });

  }


  newItem : ActionPannelItem = {
    actionTitle : `New Item` ,
    endpoint : `${environment.baseUrl}/api/Permission/add-item-permession`,
    formEditData : `${environment.baseUrl}/meta/AddPermessionsItemCommand` ,

  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
    items : [this.newItem],
    title : "Add new task"
  };


  actions : GridAction = {
    actionThtitle : "Items",
    actionButtonTitle : "View Items" ,
    Compoment : ItemComponent,
  }

  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
    actions : [this.actions]
  };

  select : SelectOrder = {
    endpointData : 'https://localhost:44312/api/Permission',
    endpointAction : 'https://localhost:44312/api/Permission/ordre',
    InterfaceName : 'change menu order',
    TaskSelectCollumn : 'name',
  };

  config = {
    endpoint: `${environment.baseUrl}/api/Task/add-task`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    formdata: `${environment.baseUrl}/meta/CreateTaskCommand`,
    formeditdata: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
    pageSize: 2,
    title: 'TaskManagement',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };

  openDialog(metaData: any, isUpdate: boolean, endpoint: any , title=this.action.title): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint,title},


    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }


}
