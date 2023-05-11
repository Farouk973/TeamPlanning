import {Component, Input, OnInit} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ResourcesDialogComponent} from "../resources-dialog/resources-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-resources-alloted',
  templateUrl: './resources-alloted.component.html',
  styleUrls: ['./resources-alloted.component.css']
})
export class ResourcesAllotedComponent implements OnInit {

  @Input() element?: any;

  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog(id) {
     this.dialog.closeAll();
   // this.dialog.open<string>(ResourcesDialogComponent);
    const dialogRef = this.dialog.open(ResourcesDialogComponent , {
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
