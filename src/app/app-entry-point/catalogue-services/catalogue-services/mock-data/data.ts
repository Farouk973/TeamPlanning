import { BehaviorSubject } from "rxjs";
import { CustomCellComponent } from "src/shared/generic/data-table-server-side/data-table-generic/custom-cell/custom-cell.component";

import { CardData } from "src/shared/generic/list-card/Models/cardModel";
import { Injector } from '@angular/core';
import { DataTableGenericInput } from "src/shared/generic/models/dataTable.model";
import { EditDeleteCatalogueComponent} from "../edit-delete-catalogue/edit-delete-catalogue.component";
import { ActionCatalogueComponent} from "../action-catalogue/action-catalogue.component";

export const mockCardData: CardData={
    endpoint: new BehaviorSubject<string>("https://localhost:44312/api/service"),
    updateEndpoint: "https://localhost:44312/api/service",
    deleteEndpoint: "https://localhost:44312/api/service",
    primaryColor: '#00b2d91a',
    labelColor: '#00B2D9',
    minHeight:"160px",
    maxHeight:"160px",
    bodyTitleName: "bodyTitle",
    textbodyName:"textbody",
    primaryLabelName:"category",
    showEditButton: false,
    showBody: false,
    showFooterAction: false,
    showDropdownMenu: false,
    showCardActions: false,
    showFooter: false,
    showIconAction: false,
    editing: false,
 //   componentAction : EditDeleteCatalogueComponent ,
 //   componentContent: ActionCatalogueComponent
  
  };

  export const mockDataTableData: DataTableGenericInput={
    columns: [
      { 
        columnDef: 'bodyTitle',
        header: 'Service name',
        cel: (element: any) => `${element.bodyTitle}`
      },
      {
        columnDef: 'category',
        header: 'Category',
        cel: (element: any) => `${element.category}`
      },
      {
        columnDef: 'nbhours',
        header: 'EstimatedTime',
        cel: (element: any) => `${element.nbhours}`
      },
      {
        columnDef: 'nbresources',
        header: 'Resources',
        cel: (element: any) => `${element.nbresources}`
    
      },
      {
        columnDef: 'Add',
        header: 'Add',
        component: CustomCellComponent,
       
      }
    ],
  columnDefs:['bodyTitle', 'category', 'nbhours', 'nbresources','Add'],
 
  width: "700px",
  params:1 ,
  endpoint:new BehaviorSubject<string>("https://localhost:44312/api/service/getLimited"),
  tableFor:"services",
  pageSize:3,
  pageIndex:1,
  length:100,
  showRenderButton:false,
  submitButtonClass:"submit-button",
  cancelButtonClass:"cancel-button",
  submitButtonLabel:"submit bundle request",
  cancelButtonLabel:"cancel",
  updateEndpoint:"https://localhost:44312/service-bundle",
  marginRightValue:"22rem",
  };
  export const CommonCssBehaviours={
    primaryColor: '#00b2d91a',
    labelColor: '#00B2D9',

  }
  export const categoryData: CardData[]=[
    {
      ...CommonCssBehaviours,
      primaryLabel: 'All'
       
     
     },
    {
   ...CommonCssBehaviours,
   primaryLabel: 'Sport'
    
  
  },
  {
    ...CommonCssBehaviours,
    primaryLabel: 'Travel'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Health'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Love'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Fashion'
     
   
   },
   {
    ...CommonCssBehaviours,
    primaryLabel: 'Technology'
     
   
   }
   
  ];


