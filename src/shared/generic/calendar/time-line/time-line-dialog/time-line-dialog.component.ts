import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedServices } from 'src/shared/generic/SharedServices.service';
import { ColumnMetadata } from 'src/shared/generic/models/ColumnMetadata.model';

@Component({
  selector: 'app-time-line-dialog',
  templateUrl: './time-line-dialog.component.html',
  styleUrls: ['./time-line-dialog.component.css']
})
export class TimeLineDialogComponent implements OnInit {
  metadatas: ColumnMetadata[] = [];
    rows: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<TimeLineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public timeservice: SharedServices,  ) { }

  ngOnInit(): void {
    this.getGridData()
    console.log(this.data.metadata)
    this.timeservice
  .getMetadata(this.data.metadata.metaData)
  .subscribe((data) => {
    this.metadatas = data;

  });
  }
  getGridData() {
      this.timeservice
      .getData(this.data.metadata.endpoint+"/"+this.data.data)
      .subscribe((data) => {
        this.rows = data;
      });
    }
}
