import { Component, OnInit } from '@angular/core';
import { endpoints } from 'src/shared/generic/models/bigdomain.model';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { GridView } from 'src/shared/generic/models/GridView.model';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/generic/nxm-dialog/dialog/dialog.component';
import { Form } from 'src/shared/generic/models/Form.model';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
  }
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/`,
    formEditData: `${environment.baseUrl}/meta/Update`,
    title : "Roles & Permissions"
  };

  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Skills/get-Gridskills`,
    formdata: `${environment.baseUrl}/meta/CreateSkillCommand`,
    metadata: `${environment.baseUrl}/meta/GetSkillsGridVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };






// form:Form={

//   endpoint: `${environment.baseUrl}/api/Skills/add-skill-form/`,
//   Object: null,
//   metaData: `${environment.baseUrl}/meta/CreateSkillFormCommand`,
// }
//   openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
//     const dialogRef = this.dialog.open(DialogComponent, {
//       width: '1067px',
//       height: '519px',
//       data: { metaData, isUpdate, endpoint },
      
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//     });
//   }
}
