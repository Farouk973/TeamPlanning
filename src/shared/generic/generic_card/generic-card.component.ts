import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GenericCardService } from './generic-card.service';
import { Card, CardData, CardOptions } from './Models/cardModel';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'],
})


export class GenericCardComponent   {
  @Input() data: CardData;

  constructor(private cardService: GenericCardService) {}

  onUpdate(card:Card): void {
    this.cardService.updateCard(this.data.endpoint, card).subscribe();
  }

  onDeleteCard(card: Card): void {
    this.cardService.deleteCard(this.data.endpoint, card).subscribe();
  }
}