import { Component, OnInit } from '@angular/core';
import {mockDataTableRequestData} from "../request.task.data";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
request =  mockDataTableRequestData;
  constructor() { }

  ngOnInit(): void {
  }

}
