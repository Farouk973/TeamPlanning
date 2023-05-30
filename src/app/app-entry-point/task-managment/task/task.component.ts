import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

import {Router} from "@angular/router";
import {DataTableGenericInput} from "../../../../shared/generic/models/dataTable.model";
import {BigNumberService} from "../../../../shared/services/big-number.service";
import {ResourcesAllotedComponent} from "../resources-alloted/resources-alloted.component";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../../../environments/environment";




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  @Input() element?: any;
  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];

    tasks : Task
  idRequest! : string;

  constructor(public dialog: MatDialog , private router : Router ) { }


  openDialogue(){
    this.task.endpoint.next(`${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/${this.element?.id}`)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);
    this.task.readData = this.element.tasksList;

  }

  openCalander(){
    this.router.navigate(['request/task-calandar',this.element.id ] )  }

  task:  DataTableGenericInput={
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
          const nbhours = BigNumberService.transform(element.estimatedTime);
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

    width: "100%",
    params:1 ,
    endpoint:new BehaviorSubject<string>(`${environment.baseUrl}/api/RequestManagement/get-tasksByRequest/${this.element?.id}`),
    tableFor:"services",
    pageSize:3,
    pageIndex:1,
    length:100,
    showRenderButton:false,
    updateEndpoint:`${environment.baseUrl}/service-bundle`,
    marginRightValue:"46rem",
    allowedSortColumns: ['skills'],
    primaryColorTh:"#667280",
    fontFamilyTh:"Inter",
    fontStyleTh:"normal",
    fontWeightTh:"500",
    fontSizeTh:"12px",
    lineHeightTh:" 15px",
    zIndexTh:"1",
    primaryColorTd:"#001E50",
    backgroundTdColor:"white",
    headerHeight:"40px",
    sortDirection: 'desc'  ,
    trPaddingLeft:'10'
  };

}
