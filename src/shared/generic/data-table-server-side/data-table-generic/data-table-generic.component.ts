import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortHeaderIntl } from '@angular/material/sort';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SharedServices } from '../../SharedServices.service';
import { NumberInput } from '@angular/cdk/coercion';
import { DataService } from './data.service';

@Component({
  selector: 'app-data-table-generic',
  templateUrl: './data-table-generic.component.html',
  styleUrls: ['./data-table-generic.component.css'],
  providers: [
    { provide: MatSortHeaderIntl, useClass: MatSortHeaderIntl }
  ]
 
})

export class DataTableGenericComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  totalItems = 100;
  pageSizeOptions = [5, 10, 25, 50];
  pagesToDisplay: number[] = [];
  selectedRows: any[] = [];
  @Input() data: DataTableGenericInput;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  private destroy$: Subject<void> = new Subject<void>();
  
  constructor(private httpClient: HttpClient, public listCardService: SharedServices,private dataService: DataService,private elementRef: ElementRef) {}

  ngOnInit() {
    this.getData();
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
  get pages(): number[] {
    const pageCount = Math.ceil(this.paginator.length / this.paginator.pageSize);
    return Array(pageCount).fill(0).map((_, i) => i);
  }
  onSubmit(){
  
    this.saveToServer();
  }
  private saveToServer(){
    this.listCardService.updateRow(this.data.updateEndpoint, this.selectedRows).subscribe(
    response => {
      alert("success")
    },
    error => {
      console.error('Error updating card:', error);
      alert("error")
    }
  );
}
  getData() {
    this.data?.endpoint?.pipe(
      takeUntil(this.destroy$)
    ).subscribe((endpointValue) => {
      this.listCardService.getParametrizedData(endpointValue, this.data.params)
        .subscribe((data) => {this.dataSource.data = data[this.data.tableFor],
          this.totalItems= data.total
          
        });
  
    });
  }
  onPageChanged(event: PageEvent) {
    if ((event.pageIndex/event.length === Math.ceil(event.length / event.pageSize) - 1) && (this.totalItems>event.length) ) {
      this.data.showRenderButton = true;
      
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
}


export interface DataTableGenericInput {
  columns?: TableColumn[];
  columnDefs?: string[];
  sortActive?: string;
  sortDirection?: 'asc' | 'desc';
  sortDisableClear?: boolean;
  width?: string;
  params:number ;
  endpoint:BehaviorSubject<string>;
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
}