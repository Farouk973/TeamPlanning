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
      .subscribe((cardData) => {this.cardDataList = this.mapCardDataList(cardData) ; console.log(this.cardDataList) });

  });
}

 
 private mapCardDataList(cardData: CardData[]): CardData[] {
  return cardData.map((dataCard: CardData) => {
   
    return {
      ...dataCard,
      ...this.data,
      
    };
  });
} onAction(){

 }
onEdit(cardId: string) {
  const cardIndex = this.cardDataList.findIndex(card => card.id === cardId);
  
    this.cardDataList[cardIndex].editing = true;
   
  
}
saveCard(cardId: string) {
  const cardIndex = this.cardDataList.findIndex(card => card.id === cardId);

  if (cardIndex >= 0) {
    this.cardDataList[cardIndex].editing = true;
    this.editingCardIndex = cardIndex;

    const { id, bodyTitleName, textbodyName, primaryLabelName } = this.cardDataList[cardIndex];
    const editingCard = { id, [bodyTitleName]: this.cardDataList[cardIndex][bodyTitleName], [textbodyName]: this.cardDataList[cardIndex][textbodyName], [primaryLabelName]: this.cardDataList[cardIndex][primaryLabelName] };
    
    this.editingCard = editingCard;
    console.log(this.editingCard)
    
  }

  this.listCardService.updateRow(this.data.updateEndpoint, this.editingCard).subscribe(
    response => {
      console.log(this.editingCard);
      this.cardDataList[cardIndex].editing = false;
    },
    error => {
      console.error('Error updating card:', error);
      this.editingCardIndex = this.editingCard = null;
    }
  );
}


 onDelete(cardId: string) {
  
  const cardIndex = this.cardDataList.findIndex(card => card.id === cardId);
  if (cardIndex >= 0) {
    // Make API call to delete the card from the server
    this.listCardService.deleteCard(this.data.deleteEndpoint, cardId)
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
