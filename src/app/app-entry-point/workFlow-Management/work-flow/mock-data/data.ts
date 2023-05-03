import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { CustomCellComponent } from "src/shared/generic/data-table-server-side/data-table-generic/custom-cell/custom-cell.component";

import { EditRequestComponent } from "../edit-request/edit-request.component";
import { BigNumberService } from "src/shared/services/big-number.service"
import { EditWorkflowComponent } from "../edit-workflow/edit-workflow.component";
import { DataTableGenericInput } from "src/shared/generic/models/dataTable.model";

  export const mockDataTableData: DataTableGenericInput={
    columns: [
      { 
        columnDef: 'name',
        header: 'name',
        cel: (element: any) => `${element.name}`
      },
      {
        columnDef: 'description',
        header: 'description',
        cel: (element: any) => `${element.description}`
      },
      {
        columnDef: 'skills',
        header: 'skills',
         cel: (element: any) => {
    return element.skillsList.map((skill: any) => {
      return `${skill.name} `;
    })
  }
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
        columnDef: 'Tasks',
        header: 'Tasks',
        
        component:EditRequestComponent
      },
       {
        columnDef: 'Edit',
        header: 'Edit',
        
        component:EditWorkflowComponent
      }
    ],
  columnDefs:['name', 'description', 'skills', 'startDate','endDate','Tasks','Edit'],
 
  width: "100%",
  params:1 ,
  endpoint:new BehaviorSubject<string>(`${environment.baseUrl}/api/RequestManagement`),
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
    export const mockDataTableTask: DataTableGenericInput={
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
        header: 'Skill',
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
        columnDef: 'Resources',
        header: 'Resources',
        cel: (element: any) => {
    const resources = BigNumberService.transform(element.nbresources);
    return resources ;
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
        columnDef: 'Status',
        header: 'Status',
        cel: (element: any) => `${element.status}`
      }
    ],
  columnDefs:['Task', 'Category', 'Skill','Estimated Time','Resources','startDate','endDate','Status'],
 
  width: "700px",


  tableFor:"Tasks",
  pageSize:3,
  pageIndex:1,
  length:100,
  showRenderButton:false,
  paddingRightRange:"60rem",
 readData:[{}]
  };
