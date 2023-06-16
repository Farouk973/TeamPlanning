import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Actionpanel, ActionPannelItem } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar } from 'src/shared/generic/models/Calendar.model';
import { Container } from 'src/shared/generic/models/Container.model';
import { Form } from 'src/shared/generic/models/Form.model';
import { GridAction, GridView } from 'src/shared/generic/models/GridView.model';
import { SelectOrder } from 'src/shared/generic/models/SelectOrder.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
import { Permission } from 'src/shared/models/permission.model';
import { PermissionService } from 'src/shared/services/permission.service';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { ItemComponent } from './item/item.component';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { GridViewComponent } from 'src/shared/generic/grid-view/grid-view.component';



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

  newItem : ActionPannelItem = {
  actionTitle : `New Item` ,
  endpoint : `${environment.baseUrl}/api/Permission/add-item-permession`,
  formEditData : `${environment.baseUrl}/meta/AddPermessionsItemCommand` ,

}
action: Actionpanel = {
  endpoint: `${environment.baseUrl}/api/Permission`,
  formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
  items : [this.newItem],
  title : "Permession"
};


actions : GridAction = {
  actionThtitle : "Items",
  actionButtonTitle : "View Items" ,
  Compoment : ItemComponent,
}

grid: GridView = {
  endpoint: `${environment.baseUrl}/api/Permission/paggination`,
  formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
  metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
  allowedSortColumns: ['title'],
  actionPanel: this.action,
  actions : [this.actions],
  pagination : true
};

  select : SelectOrder = {
    endpointData : 'https://localhost:44312/api/Permission',
    endpointAction : 'https://localhost:44312/api/Permission/ordre',
    InterfaceName : 'change menu order',
    TaskSelectCollumn : 'name',
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
  @ViewChild(GridViewComponent) childComponent: GridViewComponent;

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

}

