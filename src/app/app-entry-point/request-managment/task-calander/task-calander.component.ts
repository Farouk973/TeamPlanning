import { Component, OnInit ,OnChanges, AfterViewInit, AfterViewChecked, ViewChild, DoCheck, Input, SimpleChange, SimpleChanges} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar, CalendarDetails } from 'src/shared/generic/models/Calendar.model';
import { Form } from 'src/shared/generic/models/Form.model';
import {Location} from "@angular/common";

@Component({
  selector: 'app-task-calander',
  templateUrl: './task-calander.component.html',
  styleUrls: ['./task-calander.component.css']
})
export class TaskCalanderComponent implements OnInit , OnChanges{
  id : string = ""
  routeSub: Subscription;
  x :boolean=false
 @Input() order : any ;
  constructor(private activatedRoute: ActivatedRoute , private location : Location) {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
   }
   ngOnChanges(changes :SimpleChanges) {
    console.log("one",this.order);

    if (changes['order'] && !changes['order'].isFirstChange()) {
      const url = this.location.path();
      let id = url.substring(url.lastIndexOf('/') + 1);
      this.calendar.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/` + id;
      this.calendarDetails.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/` + id;
      this.formtask.endpoint = `${environment.baseUrl}/api/Task/request/`+this.id


      console.log("change",this.order);
      this.x = true
    }

    }
  ngOnInit(): void {
   console.log("init",this.order);
   
    this.calendar.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id
    this.calendarDetails.endpoint = `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`+this.id
    this.formtask.endpoint = `${environment.baseUrl}/api/Task/request/`+this.id
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
    endpoint : `${environment.baseUrl}/api/Task/request/`+this.id,
    metaData : `${environment.baseUrl}/meta/CreateTaskCommand` ,
    title : "New Task"
  };
  
  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/RequestManagement`,
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
