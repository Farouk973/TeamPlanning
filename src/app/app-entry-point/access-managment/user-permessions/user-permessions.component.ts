import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-user-permessions',
  templateUrl: './user-permessions.component.html',
  styleUrls: ['./user-permessions.component.css']
})

export class UserPermessionsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Users/RoleEtpermessions`,
    formEditData: `${environment.baseUrl}/meta/UpdateUserRoleEtPermessionsCommand`,
    title : "Roles & Permissions"
  };

  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Users/permessions`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    metadata: `${environment.baseUrl}/meta/GetUsersPermessionsVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };

}
