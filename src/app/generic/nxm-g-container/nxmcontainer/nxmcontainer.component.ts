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
}
