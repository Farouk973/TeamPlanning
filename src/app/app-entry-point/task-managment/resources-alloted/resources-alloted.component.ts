import {Component, Input} from '@angular/core';
import {ResourcesDialogComponent} from "../resources-dialog/resources-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-resources-alloted',
  templateUrl: './resources-alloted.component.html',
  styleUrls: ['./resources-alloted.component.css']
})
export class ResourcesAllotedComponent {

  @Input() element?: any;

  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];
  constructor(public dialog: MatDialog ) { }


  openDialog(id) {
     this.dialog.closeAll();
    const dialogRef = this.dialog.open(ResourcesDialogComponent , {
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
