import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actionpanel } from 'src/shared/generic/models/ActionPanel.model';
import { Calendar, CalendarDetails } from 'src/shared/generic/models/Calendar.model';

@Component({
  selector: 'app-request-calander',
  templateUrl: './request-calander.component.html',
  styleUrls: ['./request-calander.component.css']
})
export class RequestCalanderComponent implements OnInit {

  constructor() { }
  date!: any;
  ngOnInit(): void {
  }

  calendar: Calendar = {
    displaycollumn: 'name',
    endDateCollumn: 'endDate',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement?parameterValue=1`,
    updateendpoint :`${environment.baseUrl}/api/RequestManagement`,
    startDateCollumn: 'startDate',
    eventColors: 'rgba(1, 150, 27, 0.1)',
    editable: true,
  };

  action: Actionpanel = {
    endpoint: `${environment.baseUrl}/api/Permission`,
    formEditData: `${environment.baseUrl}/meta/UpdatePermissionCommand`,
    title : "Task",

  };


  calendarDetails: CalendarDetails = {
    title : "Day Details",
    displaycollumn: 'name',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement/byDate`,
      statusColum : "status",
      styleCard : 1 ,
    actionPannel : this.action
  };
  

}
