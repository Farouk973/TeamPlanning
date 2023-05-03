import { HttpClient} from '@angular/common/http';
import { Component,ViewEncapsulation, ElementRef,ChangeDetectionStrategy, Input, OnInit,AfterViewInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortHeaderIntl } from '@angular/material/sort';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SharedServices } from '../../SharedServices.service';
import { DataTableGenericInput } from '../../models/dataTable.model';


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
  
  constructor(private httpClient: HttpClient, public listCardService: SharedServices,private elementRef: ElementRef) {}
  
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

