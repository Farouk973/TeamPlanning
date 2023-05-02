 import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { DialogComponent } from '../nxm-dialog/dialog/dialog.component';
import { SharedServices } from 'src/shared/generic/SharedServices.service';
import { NumberInput } from '@angular/cdk/coercion';
import { BehaviorSubject, Subject,Observable,combineLatest ,of} from 'rxjs';
import { OutputExpression } from 'ng-dynamic-component';

import { map, takeUntil,switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GenericTableComponent implements OnInit {

  
  @Input() data: DataTableGenericInput;
  dataSource$: BehaviorSubject<any> = new BehaviorSubject([]);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(5);
currentPageNumber$: BehaviorSubject<number> = new BehaviorSubject(1);
  totalItems:number=100;
   totalPages$:BehaviorSubject<number> = new BehaviorSubject(20);
  itemsPerPage:any= [5, 10, 25, 50];
  pages$ = new Observable<any>();
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  
  selectedRows: any[] = [];
   private destroy$: Subject<void> = new Subject<void>();
 
    constructor(
    public listCardService: SharedServices,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
   
   
    this.getData();
     console.log("kgfugfcdouxyxityxitxtxt",this.pageSize$.value)
    
  }
 private calculateTotalPages(totalItems: number, itemsPerPage: number): number[] {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
   onSelectedRowsChange(rows: any[]) {
    this.selectedRows = rows;
  }
 sortData(column: string) {
   
  }
  onPageNumberChange(pageNumber: number) {
  this.currentPageNumber$.next(pageNumber);
  console.log("pg",this.pageSize$.value);
  console.log("pg",this.currentPageNumber$.value)
}
onPageSizeChange(event) {
  const pageSize = Number(event.target.value);
 
  this.pageSize$.next(pageSize);
  console.log(this.pageSize$.value)
  const totalItems = this.dataSource$.value.length; // use the length of the updated dataSource$ BehaviorSubject
  this.pages$ = of(this.calculateTotalPages(totalItems, this.pageSize$.value));
  this.currentPageNumber$.next(1);
 
}
 currentPage$: Observable<any[]> = combineLatest([
  this.dataSource$,
  this.currentPageNumber$,
  this.pageSize$
]).pipe(
  map(([data, pageNumber, pageSize]) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    console.log(typeof(endIndex));
    return data.slice(startIndex, endIndex);
  })
);

getData() {
    if (this.data?.endpoint) {
      this.data?.endpoint
        .pipe(takeUntil(this.destroy$))
        .subscribe((endpointValue) => {
          this.listCardService
            .getParametrizedData(endpointValue, this.data.params)
            .subscribe((data) => {
              this.dataSource$.next(data[this.data.tableFor] || data);
              this.totalItems = this.dataSource$.value.length;
            this.pages$= of(this.calculateTotalPages(this.totalItems, this.pageSize$.value));
            });
        });
    } else {
      this.dataSource$.next(this.data.readData);
    }
  }




 

}
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
  allowedSortColumns?:any,
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
}