import { Component, OnInit } from '@angular/core';
import {mockDataTableRequest} from "../request.task.data";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
request =  mockDataTableRequest;
  constructor() { }

  ngOnInit(): void {
  }

}
