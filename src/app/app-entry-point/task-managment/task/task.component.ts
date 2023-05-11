import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

import {Router} from "@angular/router";
import {mockDataTableTaskData} from "../request.task.data";
import {DataTableGenericInput} from "../../../../shared/generic/models/dataTable.model";
import {BigNumberService} from "../../../../shared/services/big-number.service";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  @Input() element?: any;
  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];
  constructor(public dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {

  }

  openDialogue(){
    console.log(this.element.id)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);
    this.task.readData = this.element.tasksList;

  }
task: DataTableGenericInput={
    columns: [
      {
        columnDef: 'Task',
        header: 'Task',
        cel: (element: any) => `${element.name}`
      },
      {
        columnDef: 'Category',
        header: 'Category',
        cel: (element: any) => `${element.category}`
      },
      {
        columnDef: 'Skill',
        header: 'Skills',
        cel: (element: any) =>`${element.skill}`
      },
      {
        columnDef: 'Estimated Time',
        header: 'Estimated Time',
        cel: (element: any) =>{
          const nbhours = BigNumberService.transform(element.nbHours);
          return nbhours;
        }

      },

      {
        columnDef: 'startDate',
        header: 'StartDate',
        cel: (element: any) =>{
          const startDate = new Date(element.startDate);
          return startDate.toLocaleDateString();
        }

      },
      {
        columnDef: 'endDate',
        header: 'EndDate',
        cel: (element: any) => {
          const endDate = new Date(element.endDate);

          return endDate.toLocaleDateString();
        }

      },
      {
        columnDef: 'Resources',
        header: 'Resources',
       component: ResourcesAllotedComponent

      },
    ],
    columnDefs:['Task', 'Category', 'Skills','Estimated Time','StartDate','EndDate','Resources'],

    width: "700px",


    tableFor:"Tasks",
    pageSize:3,
    pageIndex:1,
    length:100,
    showRenderButton:false,
    paddingRightRange:"60rem",
    readData:[{}]
  };
}
