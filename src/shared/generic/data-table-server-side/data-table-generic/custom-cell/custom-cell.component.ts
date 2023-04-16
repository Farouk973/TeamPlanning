import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomCellStateService } from './custom-cell-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-cell',
  templateUrl: './custom-cell.component.html',
  styleUrls: ['./custom-cell.component.css']
})
export class CustomCellComponent   {
 
  @Input() element: any;
  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() dataSource:any ;
  countVisible = false;
  count = 0;
  @Input() selectedRows: any[];
  constructor() { }

  incrementCount(element) {
    element.totalCount++;
    this.selectRows(element)
  }
  
  decrementCount(element) {
    if (element.totalCount > 0) {
      element.totalCount--;
      this.selectRows(element)
    
    }
  }
  toggleCountVisibility(element: any) {
    element.totalCount = 1;
    this.selectRows(element);
  }
  private selectRows(element:any){
    const selectedRow = this.selectedRows.find(row => row.id === element.id);
    if (element.totalCount == 0){
      const index = this.selectedRows.indexOf(selectedRow);
      this.selectedRows.splice(index, 1);
    }
    if (selectedRow) {
      selectedRow.totalCount = element.totalCount;
    } else {
      // Otherwise, add it to the array
      this.selectedRows.push(element);
    }
    this.selectedRowsChange.emit(this.selectedRows);
  }
}