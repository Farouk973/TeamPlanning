import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Kanban, Kanbanbord } from 'src/shared/generic/models/kanban.model';

@Component({
  selector: 'app-task-kanban',
  templateUrl: './task-kanban.component.html',
  styleUrls: ['./task-kanban.component.css']
})
export class TaskKanbanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  kanban : Kanban = {
    desiredEnum:"taskEnum",
    endpoint:`${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`,
    enumeration : `${environment.baseUrl}/meta/GetTasksByRequestQueryViewModel/` ,
    updateEndpoint : `${environment.baseUrl}/api/Task/change-task-status`,
  }

  kanbanbord: Kanbanbord = {
    displaycollumn: 'name',
    endpoint:
    `${environment.baseUrl}/api/RequestManagement?parameterValue=1`,
    descriptioncollumn : "description",
    endpointList: `${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/`,
    descriptionListcollumn: "skill_level",
    displayListcollumn : "name",
  };
}
