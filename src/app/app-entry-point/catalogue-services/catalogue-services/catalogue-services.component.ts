import { Component, OnInit } from '@angular/core';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { cards } from '../mock-data/cards';

@Component({
  selector: 'app-catalogue-services',
  templateUrl: './catalogue-services.component.html',
  styleUrls: ['./catalogue-services.component.css']
})
export class CatalogueServicesComponent implements OnInit {
searchResults: any;
cards:any=cards;
handleSearchEvent($event: any) {
throw new Error('Method not implemented.');
}


  constructor() { }

  ngOnInit(): void {
  }
  onSearch($event: Event) {
    
    }
   
  
}
