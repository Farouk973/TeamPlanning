import { Component, OnInit ,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardGridView } from '../../models/CardView.model';
import { ColumnMetadata } from '../../models/ColumnMetadata.model';
import { ConfirmationComponent } from '../../nxm-dialog/confirmation/confirmation.component';
import { SharedServices } from '../../SharedServices.service';
import { DetailsProjectComponent } from 'src/app/app-entry-point/list-projects-management/details-project/details-project.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  constructor(
    public gridviewService: SharedServices,
    private dialog: MatDialog
  ) {}
  // GridView Input
  @Input() cardView: CardGridView;
  // Expression to detect images
  reg: string = '.(jpg|png|jpeg|gif|bmp)';
  // gridview rows retrieved
  rows: any[] = [];
  // mapping metadata response into columnMetadata
  metadatas: ColumnMetadata[] = [];
  ngOnInit() {
    this.getGridData();

    this.gridviewService
      .getMetadata(this.cardView.metadata)
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


  getGridData() {
    this.gridviewService
      .getData(this.cardView.endpoint)
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

    const { actionPanel } = this.cardView;
    this.gridviewService.updateRow(actionPanel.formEditData, itemId);
  }

  onDeleteItem(itemId: number) {
    const { endpoint } = this.cardView;
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

  openDialog( p ) {
    console.log("open")
    const dialogRef = this.dialog.open(DetailsProjectComponent , {
      data: {p}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
