import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
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
    endpoint: 'https://localhost:44312/api/Users',
    metadata: 'https://localhost:44312/meta/GetUsersPermessionsVm',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    formeditdata: 'https://localhost:44312/meta/UpdateUserRoleEtPermessionsCommand',
    pageSize: 2,
    title: 'Permessions Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };

  action: Actionpanel = {
    endpoint: 'https://localhost:44312/api/Users',
    formEditData: 'https://localhost:44312/meta/UpdateUserRoleEtPermessionsCommand',
  };

  grid: GridView = {
    endpoint: 'https://localhost:44312/api/Users',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    metadata: 'https://localhost:44312/meta/GetUsersPermessionsVm',
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };

  card: CardGridView = {
    endpoint: 'https://localhost:44312/api/Role',
    formdata: 'https://localhost:44312/meta/CreateRoleCommand',
    metadata: 'https://localhost:44312/meta/GetRoleListVm',
    cardtitle: "title",
    carddescription: "description",
    width: 300,
    height: 150,
    actionPanel: this.action,
  };
}
