import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";
import {TaskService} from "../../../../shared/services/task.service";
import {Task} from "../../../../shared/models/task.model";
@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.css']
})
export class ResourcesDialogComponent implements OnInit {
  task! : Task
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];
  constructor(public dialogRef: DialogRef<ResourcesAllotedComponent> ,   @Inject(MAT_DIALOG_DATA) public data: {id}
  , private taskService : TaskService) {}

  ngOnInit(): void {
     this.taskService.getTask(this.data.id).subscribe((data)=>{
       this.task = data
       console.log(this.task)
     })
  }
}
