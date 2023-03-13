import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ConfirmationComponent } from '../nxm-dialog/confirmation/confirmation.component';
import { DialogComponent } from '../nxm-dialog/dialog/dialog.component';
import { GridviewService, GridData, ColumnMetadata } from './grid-view.service';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  constructor(
    private gridviewService: GridviewService,
    private dialog: MatDialog
  ) {}

  reg: string = '.(jpg|png|jpeg|gif|bmp)';
  @Input() metadata: string = '';
  @Input() allowedSortColumns: string[] = [];
  @Input() endpoint: string = '';
  @Input() pageSize: number = 10;
  @Input() formData: string = '';
  @Input() formEditData: string = '';
  rows: any[] = [];
  currentPage: number = 1;
  metadatas: ColumnMetadata[] = [];
  ngOnInit() {
    this.getGridData();

    this.gridviewService.getMetadata(this.metadata).subscribe((data) => {
      this.metadatas = data;
    });
  }

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  get sortedRows(): any[] {
    if (!this.sortColumn) {
      return this.rows;
    }
    return this.rows.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];
      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  sortData(column: string) {
    if (this.allowedSortColumns.includes(column)) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    }
  }

  getGridData() {
    this.gridviewService.getGridData(this.endpoint).subscribe((data) => {
      this.rows = data;
    });
  }
  getObjectKeys(obj: any) {
    delete obj.created;
    delete obj.createdById;
    delete obj.events;
    delete obj.modified;
    delete obj.modifiedById;
    return Object.keys(obj);
  }
  onEditItem(itemId: number) {
    const index = this.rows.findIndex((item) => item.id === itemId);
    this.gridviewService
      .updateRow(this.formEditData, itemId);
  }

  onDeleteItem(itemId: number) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      height: '200px',

      data: { message: 'Are you sure you want to delete this item?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gridviewService
          .deleteRow(this.endpoint, itemId)
          .subscribe((resp) => {
            if (resp) {
              const index = this.rows.findIndex((item) => item.id === itemId);
              if (index !== -1) {
                this.rows.splice(index, 1);
              }
            }
          });
      }
    });
  }
}
