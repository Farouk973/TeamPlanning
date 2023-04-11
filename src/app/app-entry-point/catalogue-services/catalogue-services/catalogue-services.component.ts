import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CardData } from 'src/shared/generic/list-card/Models/cardModel';
import { categoryData, mockCardData } from './mock-data/data';
import { debounceTime } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-catalogue-services',
  templateUrl: './catalogue-services.component.html',
  styleUrls: ['./catalogue-services.component.css'],
 
})
export class CatalogueServicesComponent implements OnInit {
  searchForm: FormGroup;
  categories: CardData[] = categoryData;
  card: CardData = mockCardData;
  baseUrl = 'https://localhost:5001/api/Service';
  selectedCategory = '';

  constructor(private formBuilder: FormBuilder) { }

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
    if (category === this.selectedCategory) {
      // if already selected, reset to initial endpoint
      this.card.endpoint.next(`${this.baseUrl}/filter`);
      this.selectedCategory = '';
    } else {
      // if not selected, set endpoint with category
      this.card.endpoint.next(`${this.baseUrl}/filter?Category=${category}`);
      this.selectedCategory = category;
    }
  }
}
 
  
  

