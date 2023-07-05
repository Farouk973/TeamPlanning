import { Component, OnInit , ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActionPannelItem, Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { GridAction, GridView } from 'src/shared/generic/models/GridView.model';
import { ItemComponent } from '../../access-managment/permissions/item/item.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
import { PhasesComponent } from '../phases/phases.component';
import { GridViewComponent } from 'src/shared/generic/grid-view/grid-view.component';

@Component({
  selector: 'app-engagments',
  templateUrl: './engagments.component.html',
  styleUrls: ['./engagments.component.css']
})
export class EngagmentsComponent implements OnInit {
  @ViewChild(GridViewComponent) childComponent: GridViewComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(metaData: any, isUpdate: boolean, endpoint: any , title=this.action.title): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint,title},


    });
    dialogRef.afterClosed().subscribe((result) => {
      // window.location.reload()
      this.test()
     });
   }
 
     test(): void {
       this.childComponent.onEditItem()
     }
 
  config = {
    endpoint: `${environment.baseUrl}/api/Engagement`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    formdata: `${environment.baseUrl}/meta/CreateEngagementCommand`,
  };
  newItem : ActionPannelItem = {
    actionTitle : `New Phase` ,
    endpoint : `${environment.baseUrl}/api/Phase/add`,
    formEditData : `${environment.baseUrl}/meta/CreatePhaseCommand` ,
  
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Engagement`,
    formEditData: `${environment.baseUrl}/meta/UpdateEngagementCommand`,
    items : [this.newItem],
    title : "Engagment"
  };
  actions : GridAction = {
    actionThtitle : "Phase",
    actionButtonTitle : "View phase detail" ,
    Compoment : PhasesComponent,
  }
  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Engagement`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    metadata: `${environment.baseUrl}/meta/GetEngagementListVm`,
    allowedSortColumns: ['name'],
    actionPanel: this.action,
    actions : [this.actions],
    pagination : true
  };
}
