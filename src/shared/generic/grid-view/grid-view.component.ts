import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMetadata } from '../models/ColumnMetadata.model';
import { GridView } from '../models/GridView.model';
import { ConfirmationComponent } from '../nxm-dialog/confirmation/confirmation.component';
import { SharedServices } from '../SharedServices.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  constructor(
    public gridviewService: SharedServices,
    private dialog: MatDialog
  ) {}
  // GridView Input
  @Input() GridView: GridView;
  // Expression to detect images
  reg: string = '.(jpg|png|jpeg|gif|bmp)';
  // gridview rows retrieved
  rows: any[] = [];
  // mapping metadata response into columnMetadata
  metadatas: ColumnMetadata[] = [];
  ngOnInit() {
    this.getGridData();

    this.gridviewService
      .getMetadata(this.GridView.metadata)
      .subscribe((data) => {
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
    if (this.GridView.allowedSortColumns.includes(column)) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    }
  }

  getGridData() {
    this.gridviewService
      .getData(this.GridView.endpoint)
      .subscribe((data) => {
        this.rows = data;
      });
  }
  getObjectKeys(obj: any) {
    const excludeProperties = [
      'created',
      'createdById',
      'events',
      'modified',
      'modifiedById',
    ];
    return Object.keys(obj).filter((key) => !excludeProperties.includes(key));
  }
  onEditItem(itemId: number) {

    const { actionPanel } = this.GridView;
    this.gridviewService.updateRow(actionPanel.formEditData, itemId);
  }

  onDeleteItem(itemId: number) {
    const { endpoint } = this.GridView;
    const index = this.rows.findIndex(({ id }) => id === itemId);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '300px',
      height: '220px',
      data: { message: 'Are you sure you want to delete this item?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gridviewService.deleteRow(endpoint, itemId).subscribe((resp) => {
          if (resp) {
            this.rows.splice(index, 1);
          }
        });
      }
    });
  }
}
