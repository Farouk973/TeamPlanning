import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CardData } from 'src/shared/generic/list-card/Models/cardModel';
import { categoryData, mockCardData, mockDataTableData } from './mock-data/data';
import { debounceTime } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataTableGenericInput } from 'src/shared/generic/data-table-server-side/data-table-generic/data-table-generic.component';
@Component({
  selector: 'app-catalogue-services',
  templateUrl: './catalogue-services.component.html',
  styleUrls: ['./catalogue-services.component.css'],
 
})
export class CatalogueServicesComponent implements OnInit {
  searchForm: FormGroup;
  categories: CardData[] = categoryData;
  mockDataTableGenericData:DataTableGenericInput = mockDataTableData ;
  card: CardData = mockCardData;
  baseUrl = 'https://localhost:5001/api/Service';
  selectedCategory = '';
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
    this.card.endpoint.next("https://localhost:5001/api/service");
  } else {
    // if search term is not empty, set endpoint with search term
    this.card.endpoint.next(`${this.baseUrl}/search?SearchedWord=${searchTerm}`);
  }
  }
   filter(category: string) {
    if (category === "All") {
      this.card.endpoint.next("https://localhost:5001/api/service");
    }
   else if (category === this.selectedCategory) {
      // if already selected, reset to initial endpoint
      this.card.endpoint.next(`${this.baseUrl}/filter`);
      this.selectedCategory = '';
    } else {
      // if not selected, set endpoint with category
      this.card.endpoint.next(`${this.baseUrl}/filter?Category=${category}`);
      this.selectedCategory = category;
    }
  }
  openDialogue(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);

  }
}
 
  
  

