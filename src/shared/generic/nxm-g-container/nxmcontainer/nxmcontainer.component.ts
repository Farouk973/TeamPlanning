import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actionpanel } from '../../models/ActionPanel.model';
import { Calendar } from '../../models/Calendar.model';
import { Container } from '../../models/Container.model';
import { Form } from '../../models/Form.model';
import { GridView } from '../../models/GridView.model';
import { DialogComponent } from '../../nxm-dialog/dialog/dialog.component';

import { Config } from './Config.interface';

@Component({
  selector: 'app-nxmcontainer',
  templateUrl: './nxmcontainer.component.html',
  styleUrls: ['./nxmcontainer.component.scss'],
})
export class NXMContainerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Input()
  Config!: Config;
  config!: Config;
  dataSource: MatTableDataSource<any>;

  ngOnInit(): void {
    this.config = this.Config;
  }
 /* openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${Object.keys(result)}`);
    });
  }*/

  openDialog(metaData: any, isUpdate: boolean, endpoint: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: { metaData, isUpdate, endpoint },
      

    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permession`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
  };
  forms: Form = {
    endpoint: `${environment.baseUrl}/api/Projects`,
    // Object: {
    //   name: 'wajih',
    //   description: 'hmayed',
    // },
    metaData: `${environment.baseUrl}/meta/CreatePermissionCommand`,
  };
  grid: GridView = {
    endpoint: `${environment.baseUrl}/api/Permession`,
    formdata: `${environment.baseUrl}/meta/CreatePermissionCommand`,
    metadata: `${environment.baseUrl}/meta/GetPermissionListVm`,
    allowedSortColumns: ['title'],
    actionPanel: this.action,
  };
  calendar: Calendar = {
    displaycollumn: 'Name',
    endDateCollumn: 'dateTime1',
    endpoint:
      'https://requestly.dev/api/mockv2/proj?rq_uid=CtzEtdGYaWOFBXtVgWIzHwrNf8h2',
    startDateCollumn: 'dateTime',
    eventColors: 'rgba(1, 150, 27, 0.1)',
    editable: true,
  };
  container: Container = {
    containerInfo: null,
    gridView: this.grid,
  };

}
