import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

import { mockDataTableRequest} from "../request.task.data";
import {DataTableGenericInput} from "../../../../shared/generic/models/dataTable.model";
import {mockDataTableTask} from "../../workFlow-Management/work-flow/mock-data/data";
import {Router} from "@angular/router";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

@Input() element : any;
  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];

  constructor(public dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {
    console.log(this.element)
  }


  render() {

  }
}
