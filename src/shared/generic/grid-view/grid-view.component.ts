import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMetadata } from '../models/ColumnMetadata.model';
import { GridView } from '../models/GridView.model';
import { ActiondialogComponent } from '../nxm-dialog/actiondialog/actiondialog.component';
import { ConfirmationComponent } from '../nxm-dialog/confirmation/confirmation.component';
import { DialogComponent } from '../nxm-dialog/dialog/dialog.component';
import { SharedServices } from '../SharedServices.service';
import { PageEvent } from '@angular/material/paginator';

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
  totalItems = 200;
  pageSizeOptions = [10, 50, 100];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  Index:any = 0;
page:any=this.pageSizeOptions[0]
  ngOnInit() {
    this.getGridData();

    this.gridviewService
      .getMetadata(this.GridView.metadata)
      .subscribe((data) => {
        this.metadatas = data;
        console.log("data" ,data)
      });
  }

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
    console.log('rrrrrr data');
    
    if(this.GridView.pagination == true){
      this.gridviewService
      .getData(this.GridView.endpoint+"?take="+this.pageSizeOptions[0]+"&skip="+0)
      .subscribe((data) => {
        this.rows = data;
        console.log("data" ,data)
  //     this.totalItems = data.length
      });
    }
    else{
    this.gridviewService
      .getData(this.GridView.endpoint)
      .subscribe((data) => {
        this.rows = data;
        console.log("data" ,data)
       this.totalItems = data.length
      });
  }
}
getGridDataPagination(take : any , skip : any) {
  if(this.GridView.pagination == true){
    this.gridviewService
    .getData(this.GridView.endpoint+"?take="+take+"&skip="+skip)
    .subscribe((data) => {
      this.rows = data;
    });
  }
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
  onEditItem() {
    this.getGridDataPagination(this.page,this.Index)
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
        this.gridviewService.deleteRow(this.GridView.actionPanel.endpoint, itemId).subscribe((resp) => {
          if (resp) {
            this.rows.splice(index, 1);
          }
          this.getGridData()
        });
      }
    });
  }


  openDialogaction(data:any , id : any): void {
    const dialogRef = this.dialog.open(ActiondialogComponent, {
      width: '1067px',
      height: '519px',
      data: {data , id},
    });
    dialogRef.afterClosed().subscribe(result => {
   //   console.log(`Dialog result: ${Object.keys(result)}`);
     }) 
    }

    handlePageChange(event: PageEvent) {
      // Récupérer les données correspondantes à la nouvelle page
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
   //   const newData = yourDataArray.slice(startIndex, endIndex);
  this.Index = startIndex
this.page=event.pageSize
    this.getGridDataPagination(event.pageSize,startIndex)
    }


}
