import { HttpClient, HttpParams } from '@angular/common/http';
import { Component,ViewEncapsulation,HostBinding , ComponentRef, ElementRef,ChangeDetectionStrategy, Input, OnInit,AfterViewInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortHeaderIntl } from '@angular/material/sort';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SharedServices } from '../../SharedServices.service';
import { NumberInput } from '@angular/cdk/coercion';
import { DataService } from './data.service';
import { OutputExpression } from 'ng-dynamic-component';


@Component({
  selector: 'app-data-table-generic',
  templateUrl: './data-table-generic.component.html',
  styleUrls: ['./data-table-generic.component.css'],
  providers: [
    { provide: MatSortHeaderIntl, useClass: MatSortHeaderIntl }
  ],
  encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush
 
})

export class DataTableGenericComponent implements OnInit,AfterViewInit  {

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
   
  totalItems = 100;
  pageSizeOptions = [5, 10, 25, 50];
  pagesToDisplay: number[] = [];
  selectedRows: any[] = [];
  pageIndex:any;
  @Input() data: DataTableGenericInput;

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  private destroy$: Subject<void> = new Subject<void>();
  
  constructor(private httpClient: HttpClient, public listCardService: SharedServices,private dataService: DataService,private elementRef: ElementRef) {}
  
  ngOnInit() {
    this.getData();
      this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   

  }
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('.mat-paginator-container');
    const pageSizeSelector = container.querySelector('.mat-paginator-page-size');
    const rangeActions = container.querySelector('.mat-paginator-range-actions');
    container.insertBefore(pageSizeSelector, rangeActions.nextSibling);
  }
  onSelectedRowsChange(rows: any[]) {
    this.selectedRows = rows;
  }
  onCancel(){
  
    this.selectedRows = [];
   
   
  }

  getData() {
    if(this.data?.endpoint){
      this.data?.endpoint?.pipe(
      takeUntil(this.destroy$)
    ).subscribe((endpointValue) => {
      this.listCardService.getParametrizedData(endpointValue, this.data.params)
        .subscribe((data) => {this.dataSource.data = data[this.data.tableFor] || data,
          this.totalItems= data.total
          console.log(data)
          
        });
  
    });
  }else{
    this.dataSource.data = this.data.readData;
  }
    
  }
 
  onPreviousPage() {
    if (this.data.params > 1) {
      this.data.params--;
      this.getData();
    }
  }

  onNextPage() {
    if (this.data.params < Math.ceil(this.totalItems / this.data.PAGE_SIZE)) {
      this.data.params++;
      this.getData();
    }
  }
  onPageSizeChange() {
    // handle page size change
  }
  onTotalItemsChange(){
    
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
}
