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
  @Output() edit: EventEmitter<Card> = new EventEmitter();
  @Output() action: EventEmitter<Card> = new EventEmitter();
  constructor(private cardService: GenericCardService) {}

  onEdit() {
    this.edit.emit();
  }

  onAction() {
    this.action.emit();
  }
}