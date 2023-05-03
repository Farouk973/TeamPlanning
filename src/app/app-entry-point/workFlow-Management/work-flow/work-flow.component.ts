import { Component, OnInit, TemplateRef,ChangeDetectionStrategy, ViewChild ,Input} from '@angular/core';

import { mockDataTableData } from './mock-data/data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { DataTableGenericInput } from 'src/shared/generic/models/dataTable.model';
@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WorkFlowComponent implements OnInit {
  mockDataTableGenericData:DataTableGenericInput = mockDataTableData ;
  
  searchForm: FormGroup;
  pagesize: BehaviorSubject<number> = new BehaviorSubject(10);  
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
   
    this.searchForm.get('searchTerm').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(() => {
     
      this.search();
    });
    
  }
  search() {
    const searchTerm = this.searchForm.get('searchTerm').value;
   
   
  if (!searchTerm) {
    // if search term is null or empty, reset to initial endpoint
    this.mockDataTableGenericData.endpoint.next("https://localhost:5001/api/RequestManagement");
  } else {
    // if search term is not empty, set endpoint with search term
    this.mockDataTableGenericData.endpoint.next(`https://localhost:5001/api/RequestManagement/search?SearchedWord=${searchTerm}`);
  }
  }
  openDialogue(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);

  }
}
