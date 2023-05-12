import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";

@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.css']
})
export class ResourcesDialogComponent implements OnInit {

  constructor(public dialogRef: DialogRef<ResourcesAllotedComponent> ,   @Inject(MAT_DIALOG_DATA) public data: {id}) {}

  ngOnInit(): void {

    console.log(this.data.id)
  }

}
