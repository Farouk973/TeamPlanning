import { DataTableGenericInput } from "src/shared/generic/models/dataTable.model";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { ViewDetailsComponent } from "./view-details/view-details.component";



export const requestconflictmockDataTable: DataTableGenericInput={
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
        columnDef: 'resources',
        header: 'resources',
        component : ViewDetailsComponent
  
      },
    ],
    columnDefs:['name', 'description', 'startDate','endDate','status','resources'],
  
    width: "100%",
    params:1 ,
    endpoint:new BehaviorSubject<string>(`${environment.baseUrl}/api/RequestManagement?parameterValue=1`),
    tableFor:"services",
    pageSize:3,
    pageIndex:1,
    length:100,
    showRenderButton:false,
    marginRightValue:"46rem",
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