import { Component, Input, OnInit,Inject,InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { GridAction, GridView } from 'src/shared/generic/models/GridView.model';
import { ID } from 'src/shared/generic/nxm-dialog/actiondialog/actiondialog.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() id ;
  constructor(@Inject(ID) public idinjected: string) { }

  ngOnInit(): void {
    this.id = this.id || this.idinjected;
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
  };
  
  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Permission/items/`+this.idinjected,
    formdata: `${environment.baseUrl}/meta/AddPermessionsItemCommand`,
    metadata: `${environment.baseUrl}/meta/GetPermessionItemsVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  
  };
}
