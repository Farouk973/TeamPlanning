import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { Form } from 'src/shared/generic/models/Form.model';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  action: Actionpanel = {
    endpoint: 'https://localhost:44312/api/Users',
    formEditData: 'https://localhost:44312/meta/UpdateUserRoleEtPermessionsCommand',
  };

  forms: Form = {
             endpoint: 'https://localhost:44312/api/Role',
             
             metaData: 'https://localhost:44312/meta/CreateRoleCommand', };

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
