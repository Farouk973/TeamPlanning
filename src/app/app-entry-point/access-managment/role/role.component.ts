import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
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
    endpoint: `${environment.baseUrl}/api/Users`,
    formEditData: `${environment.baseUrl}/meta/UpdateUserRoleEtPermessionsCommand`,
  };

  forms: Form = {
             endpoint: `${environment.baseUrl}/api/Role`,
             
             metaData: `${environment.baseUrl}/meta/CreateRoleCommand`, };

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
