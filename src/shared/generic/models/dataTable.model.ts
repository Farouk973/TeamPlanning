import { NumberInput } from "@angular/cdk/coercion";
import { OutputExpression } from "ng-dynamic-component";
import { BehaviorSubject } from "rxjs";

export interface TableColumn {

    columnDef: string;
    header: string;
    cel?: (element: any) => any;
    component?: any ;
    componentInput?:any;
    injector?: any;
  }
  
  
  export interface DataTableGenericInput {
    columns?: TableColumn[];
    columnDefs?: string[];
    sortActive?: string;
    sortDirection?: 'asc' | 'desc';
    sortDisableClear?: boolean;
    width?: string;
    params?:number ;
    endpoint?:BehaviorSubject<string>;
    updateEndpoint?:string;
    totalItemEndpoint?:string;
    tableFor?:string;
    pageSize?:NumberInput | any;
    pageIndex?:NumberInput;
    length?:NumberInput;
    showRenderButton?:boolean;
    submitButtonClass?:string;
    cancelButtonClass?:string;
    submitButtonLabel?:string;
    cancelButtonLabel?:string;
    PAGE_SIZE?:number;
    marginRightValue?:string;
    outputMethod?:OutputExpression;
    readData?:any;
    paddingRightRange?:string;
    allowedSortColumns?:any;
   primaryColorTh?:string;
  fontFamilyTh?:string;
  fontStyleTh?:string;
  fontWeightTh?:string;
    fontSizeTh?:string;
    lineHeightTh?:string;
    zIndexTh?:string;
    primaryColorTd?:string;
    backgroundTdColor?:string;
    headerHeight?:string;
    trPaddingLeft?:string;
  }
  