import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Actionpanel } from '../../models/ActionPanel.model';
import { GridView } from '../../models/GridView.model';

@Component({
  selector: 'app-actiondialog',
  templateUrl: './actiondialog.component.html',
  styleUrls: ['./actiondialog.component.css']
})
export class ActiondialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ActiondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
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

}
