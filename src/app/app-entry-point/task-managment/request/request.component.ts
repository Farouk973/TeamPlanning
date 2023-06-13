import { Component } from '@angular/core';
import {mockDataTableRequestData} from "../request.task.data";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent  {
  add : boolean=false
request =  mockDataTableRequestData;  

affAdd(){
  this.add = !this.add
}
}
