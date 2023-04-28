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
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  config = {
    endpoint: `${environment.baseUrl}/api/Users`,
    metadata: `${environment.baseUrl}/meta/GetUsersPermessionsVm`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    formeditdata: `${environment.baseUrl}/meta/UpdateUserRoleEtPermessionsCommand`,
    pageSize: 2,
    title: 'Permessions Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };

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

  card: CardGridView = {
    endpoint: `${environment.baseUrl}/api/Role`,
    formdata: `${environment.baseUrl}/meta/CreateRoleCommand`,
    metadata: `${environment.baseUrl}/meta/GetRoleListVm`,
    cardtitle: "title",
    carddescription: "description",
    width: 300,
    height: 150,
    actionPanel: this.action,
  };
}
