 import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { DialogComponent } from '../nxm-dialog/dialog/dialog.component';
import { SharedServices } from 'src/shared/generic/SharedServices.service';
import { NumberInput } from '@angular/cdk/coercion';
import { BehaviorSubject, Subject,Observable,combineLatest ,of} from 'rxjs';
import { OutputExpression } from 'ng-dynamic-component';

import { map, takeUntil,switchMap } from 'rxjs/operators';
import { DataTableGenericInput } from '../models/dataTable.model';
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
  isRotated = false;
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
     
    
  }
 private calculateTotalPages(totalItems: number, itemsPerPage: number): number[] {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
   onSelectedRowsChange(rows: any[]) {
    this.selectedRows = rows;
  }

  onPageNumberChange(pageNumber: number) {
  this.currentPageNumber$.next(pageNumber);
 
}
onPageSizeChange(event) {
  const pageSize = Number(event.target.value);
 
  this.pageSize$.next(pageSize);

  const totalItems = this.dataSource$.value.length; // use the length of the updated dataSource$ BehaviorSubject
  this.pages$ = of(this.calculateTotalPages(totalItems, this.pageSize$.value));
  this.currentPageNumber$.next(1);
 
}
sortData(column: string) {
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }
 const compareArrayLength = (a: any[], b: any[]) => {
  return a.length - b.length;
};

  this.dataSource$.next(this.dataSource$.value.sort((a, b) => {
    const valueA = a[this.sortColumn];
    const valueB = b[this.sortColumn];

    
    if (typeof valueA === 'string') {
      return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
  }));

  // Reset the current page number after sorting
  this.currentPageNumber$.next(1);
  this.isRotated = !this.isRotated;
}

 currentPage$: Observable<any[]> = combineLatest([
  this.dataSource$,
  this.currentPageNumber$,
  this.pageSize$
]).pipe(
  map(([data, pageNumber, pageSize]) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
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
