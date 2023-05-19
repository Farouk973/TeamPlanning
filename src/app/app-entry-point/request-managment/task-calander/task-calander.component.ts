import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar, CalendarDetails } from 'src/shared/generic/models/Calendar.model';
import { Form } from 'src/shared/generic/models/Form.model';

@Component({
  selector: 'app-task-calander',
  templateUrl: './task-calander.component.html',
  styleUrls: ['./task-calander.component.css']
})
export class TaskCalanderComponent implements OnInit {
  id : string = ""
  routeSub: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
   }

  ngOnInit(): void {
    this.calendar.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id

  }

  calendar: Calendar = {
    displaycollumn: 'name',
    endDateCollumn: 'endDate',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id,
    updateendpoint : `${environment.baseUrl}/api/Task`,
    startDateCollumn: 'startDate',
    eventColors: '#d5ecb4',
    editable: true,
  };
  formtask : Form ={
    metaData : "string",
    endpoint : "string" ,
    title : "New Task"
  };
  
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
    title : "Task",

  };
  calendarDetails: CalendarDetails = {
    title : "Task list ",
    displaycollumn: 'name',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id,
      statusColum : "description",
      styleCard : 2 ,
      addForm : this.formtask,
      actionPannel : this.action
  };



}
