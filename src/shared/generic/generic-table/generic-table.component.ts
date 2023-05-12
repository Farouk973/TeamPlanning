 import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { SharedServices } from 'src/shared/generic/SharedServices.service';
import { BehaviorSubject, Subject,Observable,combineLatest ,of} from 'rxjs';
import { map, takeUntil} from 'rxjs/operators';
import { DataTableGenericInput } from '../models/dataTable.model';
import { DataTableService } from './data-table.service';
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

    constructor(public listCardService: SharedServices, public sortService:DataTableService) {}
  ngOnInit() {
    this.getData();
  }

sortData(column: string) {
 this.sortService.sortData(column,this.currentPageNumber$,this.dataSource$);
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
            .getData(endpointValue)
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

// Make the component more reusable:
// The component currently relies on a specific data model, DataTableGenericInput.
// To make it more flexible and reusable, it could be refactored to accept any data model that conforms to a certain structure,
// or even accept an array of objects as input directly.
// Improve the performance of the component:
// The component currently uses an Observable to handle pagination. This can be expensive, especially if the data set is large.
// To improve performance, the component could be refactored to use rxjs/operators to handle pagination in a more performant way.
// Improve the modularity of the component:
// The component currently has some dependencies on external services, such as SharedServices and DataTableService.
// To make the component more modular, it could be refactored to use more self-contained services
// or even have the functionality integrated directly into the component.
// Improve the user interface:
// The user interface of the component could be improved to make it more user-friendly and visually appealing.
// For example, adding hover effects or animations to make the table more interactive, or implementing responsive design
// to make it more mobile-friendly.




}
