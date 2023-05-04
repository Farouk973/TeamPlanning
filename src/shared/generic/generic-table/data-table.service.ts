import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
 
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  

  constructor() {}
  sortData(column: string, currentPageNumber$: BehaviorSubject<number>, data: BehaviorSubject<any> = new BehaviorSubject([])) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  
    data.next(data.value.sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
  
      
      if (typeof valueA === 'string') {
        return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
    }));
  
    // Reset the current page number after sorting
    currentPageNumber$.next(1);
  }
  

}
