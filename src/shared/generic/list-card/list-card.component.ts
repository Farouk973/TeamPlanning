import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { mockCardData } from 'src/app/app-entry-point/catalogue-services/catalogue-services/mock-data/data';
import { SearchBarModel } from '../models/bar-search.model';
import { SharedServices } from '../SharedServices.service';
import { Card, CardData } from './Models/cardModel';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
 
})
export class ListCardComponent implements OnInit {
  @Input() data: CardData;
  @Output() edit: EventEmitter<Card> = new EventEmitter();
  @Output() action: EventEmitter<Card> = new EventEmitter();
  cardDataList: CardData[];
  searchBarModel:SearchBarModel;
  cardDataMock: CardData;
  params:number=1;
  searchResults: any;
  constructor(public listCardService: SharedServices) {}

  onEdit() {
    this.edit.emit();
  }

  onAction() {
    this.action.emit();
  }
 

  ngOnInit(): void {
    this.retrieveData();
   }
   
    
   retrieveData(): void {
    if (this.data?.endpoint) {
      this.data.endpoint.subscribe(endpointValue => {
        this.listCardService.getParametrizedData(endpointValue, this.params).subscribe((cardData: CardData[]) => {
          this.cardDataList = this.mapCardDataList(cardData);
         
        });
      });
    }
  }
 
   private mapCardDataList(cardData: CardData[]): CardData[] {
   return cardData.map((dataCard: CardData) => ({
     ...dataCard,
     ...this.data
   }));
 }
 
handleSearchEvent(results: any) {
  
  
}
 
}
