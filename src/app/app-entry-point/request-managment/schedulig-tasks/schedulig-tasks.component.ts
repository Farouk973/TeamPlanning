import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { TimeDialog, TimeLine } from 'src/shared/generic/models/Calendar.model';
import { TaskService } from 'src/shared/services/task.service';

@Component({
  selector: 'app-schedulig-tasks',
  templateUrl: './schedulig-tasks.component.html',
  styleUrls: ['./schedulig-tasks.component.css']
})
export class ScheduligTasksComponent implements OnInit {
  id : string = ""
  request : any;
  routeSub: Subscription;
  constructor(private activatedRoute: ActivatedRoute ,private service :TaskService) {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.timeline.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id
    });
    this.service.getRequest(this.id).subscribe((data) => {
      this.request = data      
      console.log(this.request)
    })
   }

  ngOnInit(): void {

  }
  onEditItem($event){

  }
  onDeleteItem($event){
    
  }
  dialogTime : TimeDialog = {
    endpoint : `${environment.baseUrl}/api/Task/get-task`,
    metaData : `${environment.baseUrl}/meta/GetTaskDetailQueryViewModel`
  }

  timeline: TimeLine = {
    displaycollumn: 'name',
    endDateCollumn: 'endDate',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`,
    startDateCollumn: 'startDate',
    dialog : this.dialogTime
  };
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/RequestManagement`,
    formEditData: `${environment.baseUrl}/meta/UpdateRequestCommand`,
    title : "Request",

  };


}
