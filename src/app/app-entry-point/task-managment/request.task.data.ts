import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";


import { BigNumberService } from "src/shared/services/big-number.service"
import { DataTableGenericInput } from "src/shared/generic/models/dataTable.model";
import {TaskComponent} from "./task/task.component";


export const mockDataTableRequestData: DataTableGenericInput={
  columns: [
    {
      columnDef: 'name',
      header: 'Name',
      cel: (element: any) => `${element.name}`
    },
    {
      columnDef: 'description',
      header: 'Description',
      cel: (element: any) => `${element.description}`
    },

    {
      columnDef: 'startDate',
      header: 'StartDate',
      cel: (element: any) =>{
        const startDate = new Date(element.startDate);
        return startDate.toLocaleDateString('en-GB').replace(/\//g, '-');
      }

    },
    {
      columnDef: 'endDate',
      header: 'EndDate',
      cel: (element: any) => {
        const endDate = new Date(element.endDate);
        return endDate.toLocaleDateString('en-GB').replace(/\//g, '-');
      }

    },
    {
      columnDef: 'status',
      header: 'Status',
      cel: (element: any) => `${element.status}`
    },
    {
      columnDef: 'Tasks',
      header: 'Tasks',
      component : TaskComponent

    },
  ],
  columnDefs:['name', 'description', 'startDate','endDate','status','Tasks'],

  width: "100%",
  params:1 ,
  endpoint:new BehaviorSubject<string>(`${environment.baseUrl}/api/RequestManagement?parameterValue=1`),
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
export const mockDataTableTaskData: DataTableGenericInput={
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
      cel: (element: any) => {
        const resources = BigNumberService.transform(element.nbresources);
        return resources ;
      }

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
