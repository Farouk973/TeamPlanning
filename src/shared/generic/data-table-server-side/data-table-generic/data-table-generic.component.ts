import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortHeaderIntl } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomCellComponent } from './custom-cell/custom-cell.component';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SharedServices } from '../../SharedServices.service';
import { NumberInput } from '@angular/cdk/coercion';
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
  pageSize = 3;
  totalItems = 100;
  selectedRows: any[] = [];
  @Input() data: DataTableGenericInput;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  private destroy$: Subject<void> = new Subject<void>();
 
pageIndex = 0;
  public paginationPages: number[] = [];
  constructor(private httpClient: HttpClient, public listCardService: SharedServices) {}

  ngOnInit() {
    this.getData();
    this.dataSource.paginator = this.paginator;
  
    
  }
  onSelectedRowsChange(rows: any[]) {
    this.selectedRows = rows;
  }
  onSubmit(){
    console.log(this.selectedRows)
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
  params:Number ;
  endpoint:BehaviorSubject<string>;
  updateEndpoint?:string;
  totalItemEndpoint?:string;
  tableFor?:string;
  pageSize?:NumberInput;
  pageIndex?:NumberInput;
  length?:NumberInput;
  showRenderButton?:boolean
}