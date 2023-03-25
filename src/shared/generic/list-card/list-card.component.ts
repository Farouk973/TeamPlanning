import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { mockCardData } from 'src/app/app-entry-point/catalogue-services/catalogue-services/mock-data/data';
import { SharedServices } from '../SharedServices.service';
import { Card, CardData } from './Models/cardModel';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() data: CardData;
  @Output() edit: EventEmitter<Card> = new EventEmitter();
  @Output() action: EventEmitter<Card> = new EventEmitter();
  cardDataList: CardData[];
  cardDataMock: CardData;
  params:number=1;
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
     this.listCardService.getParametrizedData(this.data?.endpoint,this.params).subscribe((cardData: CardData[]) => {
       this.cardDataList = this.mapCardDataList(cardData);
       console.log(this.cardDataList)
     });
   }
 
   private mapCardDataList(cardData: CardData[]): CardData[] {
   return cardData.map((dataCard: CardData) => ({
     ...dataCard,
     ...this.data,
   }));
 }
 
}
