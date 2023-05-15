import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";
import {TaskService} from "../../../../shared/services/task.service";
import {Task} from "../../../../shared/models/task.model";
import {User} from "../../../../shared/models/user.model";
import {UserService} from "../../../../shared/services/user.service";
@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.css']
})
export class ResourcesDialogComponent implements OnInit {
  task! : Task
  users : User[]
  skillLevel: string;
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];
  constructor(public dialogRef: DialogRef<ResourcesAllotedComponent> ,   @Inject(MAT_DIALOG_DATA) public data: {id}
  , private taskService : TaskService , private userService : UserService) {}

  ngOnInit(): void {
     this.taskService.getTask(this.data.id).subscribe((data)=>{
       this.task = data
       this.skillLevel =data.skill_level;
       this.userService.getUsersByLevelSkill( this.skillLevel).subscribe((data)=>{
         this.users = data;
         console.log(data)
       })
     })


  }
}
