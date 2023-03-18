import { Component, OnInit } from '@angular/core';
import { CardGridView } from 'src/shared/generic/models/CardView.model';
import { cards } from '../mock-data/cards';

@Component({
  selector: 'app-catalogue-service',
  templateUrl: './catalogue-service.component.html',
  styleUrls: ['./catalogue-service.component.css']
})
export class CatalogueServiceComponent implements OnInit {
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
    card: CardGridView = {
      endpoint: '',
      formdata: '',
      metadata: '',
      cardtitle: "title",
      carddescription: "description",
      width: 300,
      height: 150,
      
    };
  
}
