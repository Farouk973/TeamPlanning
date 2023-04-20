import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DetailsProjectComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {p}) { }

  ngOnInit(): void {
  }

}
