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

// this is not the best way , I should make the component smaller and focused on one task @A.M
 
 private mapCardDataList(cardData: CardData[]): CardData[] {
  return cardData.map((dataCard: CardData) => {
   
    return {
      ...dataCard,
      ...this.data,
      
    };
  });
}

 onAction(){

 }

trackByCardId(index: number, card: CardData): string {
  return card.id;
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



}
