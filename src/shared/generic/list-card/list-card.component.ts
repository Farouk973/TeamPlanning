import { ElementRef, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit,OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { mockCardData } from 'src/app/app-entry-point/catalogue-services/catalogue-services/mock-data/data';
import { SearchBarModel } from '../models/bar-search.model';
import { SharedServices } from '../SharedServices.service';
import { Card, CardData } from './Models/cardModel';
import { takeUntil } from 'rxjs/operators';

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
  cardDataMock: CardData =mockCardData;
  params:number=1;
  searchResults: any;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(public listCardService: SharedServices) {}


  ngOnInit(): void {
    this.retrieveData();
   }
   ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
    
retrieveData(): void {
  this.data?.endpoint?.pipe(
    takeUntil(this.destroy$)
  ).subscribe((endpointValue) => {
    this.listCardService.getParametrizedData(endpointValue, this.params)
      .subscribe((cardData) => {this.cardDataList = this.mapCardDataList(cardData) });

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
  
    
  }
  this.saveToServer();

}

private saveToServer(){
    this.listCardService.updateRow(this.data.updateEndpoint, this.editingCard).subscribe(
    response => {
      
      this.cardDataList[this.editingCardIndex].editing = false;
    },
    error => {
      console.error('Error updating card:', error);
      this.editingCardIndex = this.editingCard = null;
    }
  );
}
onPrev(): void {
  if (this.params > 1) {
    this.params--;
    this.retrieveData();
  }
}

onNext(): void {
  if (this.cardDataList.length > 0) {
    this.params++;
    this.retrieveData();
  }
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
