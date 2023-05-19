import { Component, OnInit } from '@angular/core';
import {mockDataTableRequestData} from "../request.data";
@Component({
  selector: 'app-scheduling-planning-management',
  templateUrl: './scheduling-planning-management.component.html',
  styleUrls: ['./scheduling-planning-management.component.css']
})
export class SchedulingPlanningManagementComponent implements OnInit {
  request =  mockDataTableRequestData;
  constructor() { }

  ngOnInit(): void {
  }

}
