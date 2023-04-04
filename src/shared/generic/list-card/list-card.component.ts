import { ElementRef, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  cardDataList: CardData[];
  editingCardIndex: number = null;
  editingCard: CardData = null;
  searchBarModel:SearchBarModel;
  cardDataMock: CardData =mockCardData;
  params:number=1;
  searchResults: any;
  constructor(public listCardService: SharedServices) {}


  ngOnInit(): void {
    this.retrieveData();
   }
  
    
retrieveData(): void {
  this.data?.endpoint?.subscribe((endpointValue) => {
    this.listCardService.getParametrizedData(endpointValue, this.params)
      .subscribe((cardData) => this.cardDataList = this.mapCardDataList(cardData));
  });
}

 
   private mapCardDataList(cardData: CardData[]): CardData[] {
   return cardData.map((dataCard: CardData) => ({
     ...dataCard,
     ...this.data
   }));
 }
 onAction(){
  
 }
 onEdit(cardId: string) {
  const cardIndex = this.cardDataList.findIndex(card => card.id === cardId);
  if (cardIndex >= 0) {
    this.cardDataList[cardIndex].editing = true;
    this.editingCardIndex = cardIndex;
    this.editingCard = Object.assign({}, this.cardDataList[cardIndex]);
  }
}
saveCard() {
  // Make API call to post the edited card data to the server
  this.listCardService.updateRow(this.data.updateEndpoint, this.editingCard)
    .subscribe(response => {
      // If the update was successful, update the card in the list and exit editing mode
      this.cardDataList[this.editingCardIndex] = response ?? this.cardDataList[this.editingCardIndex];
      this.cardDataList[this.editingCardIndex].editing = false;
      this.editingCardIndex = this.editingCard = null;
    }, error => {
      // If there was an error, log it and exit editing mode without updating the card
      console.error('Error updating card:', error);
      this.cardDataList[this.editingCardIndex].editing = false;
      this.editingCardIndex = this.editingCard = null;
    });
}
 onDelete(cardId: string) {
  
  const cardIndex = this.cardDataList.findIndex(card => card.id === cardId);
  if (cardIndex >= 0) {
    // Make API call to delete the card from the server
    this.listCardService.deleteRow(this.data.deleteEndpoint, Number(cardId))
      .subscribe(response => {
        // If the delete was successful, remove the card from the list
        this.cardDataList.splice(cardIndex, 1);
      }, error => {
        // If there was an error, log it and do not remove the card from the list
        console.error('Error deleting card:', error);
      });
  }
}

}
