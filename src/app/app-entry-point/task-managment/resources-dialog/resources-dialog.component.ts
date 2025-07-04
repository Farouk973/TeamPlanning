import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";
import {TaskService} from "../../../../shared/services/task.service";
import {Task} from "../../../../shared/models/task.model";
import {User} from "../../../../shared/models/user.model";
import {UserService} from "../../../../shared/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationService} from "../../../../shared/services/notification.service";
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
  , private taskService : TaskService , private userService : UserService ,private _snackBar: MatSnackBar,
              private notificationService : NotificationService) {}

  ngOnInit(): void {
     this.taskService.getTask(this.data.id).subscribe((data)=>{
       this.task = data
       this.skillLevel =data.skill_level;
       this.userService.getUsersByLevelSkill( this.skillLevel).subscribe((data)=>{
         this.users = data;
       })
     })
  }
  assignTaskToUser(id: string , firstName: string , lastName : string , userId : string) {
    this.userService.assignTaskToUser(id,this.task.id).subscribe((response)=>{
      this.openSnackBar("Task assigned to" +" "+firstName+" "+ lastName, 3000);
      this.notificationService.sendNotification("Task"+" "+this.task.name+" "+" assigned to" +" "+firstName+" "+ lastName, userId);
      let data ={ description : "Task"+" "+this.task.name+" "+" assigned to you" , userId : userId }
      this.notificationService.addNotificationsToUser(data).subscribe((response)=>{
        console.log(response)
      });
    })
  }

  unAssignTaskFromUser(id,firstName: string , lastName : string,userId : string) {

    this.userService.unAssignTaskFromUser(id,this.task.id).subscribe((response)=>{
      this.openSnackBar("Task unassigned from" +" "+ this.task.name+" "+firstName+" "+ lastName, 3000);
      this.notificationService.sendNotification("Task"+" "+this.task.name+" "+" unassigned from" +" "+firstName+" "+ lastName, userId);
      let data ={ description : "Task"+" "+this.task.name+" "+" unassigned from you" , userId : userId }
      this.notificationService.addNotificationsToUser(data).subscribe((response)=>{
        console.log(response)
      });

    })
  }

  openSnackBar(message: string, duration: number): void {
    this._snackBar.open(message, '', {
      duration: duration,

    });
  }
}
