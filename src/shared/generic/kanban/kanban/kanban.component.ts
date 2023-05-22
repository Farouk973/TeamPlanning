import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { KanbanService } from '../kanban.service';
import { Kanban } from '../../models/kanban.model';
import { FormService } from '../../form/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  @Input() kanban: Kanban;
  iteamDraged!: any;


  cards: any[];
  color = [

    '#5030E5',
    '#FFA500',
    '#8BC48A',
    '#64DD17',
    '#0277BD',
    '#8E24AA',
    '#B39DDB',
    '#0097A7',
    '#C5CAE9',
    '#FF80AB',
    '#F57F17',
    '#4DD0E1',
    '#00838F',
    '#FBC02D',
    '#F9A825',
    '#EA80FC',
    '#7E57C2',
    '#7986CB',
    '#1565C0',
    '#9CCC65',
    '#CE93D8',
    '#B388FF',
    '#2962FF',
    '#2979FF',
    '#1DE9B6',
    '#00E5FF',
    '#00ACC1',
    '#00C853',
    '#FFD54F',
    '#FFF9C4',
    '#FFEA00',
    '#8C9EFF',
    '#B2EBF2',
    '#FFF8E1',
    '#880E4F',
    '#0277BD',
    '#304FFE',
    '#FFF176',
    '#FFA000',
    '#9C27B0',
    '#4A148C',
    '#FFC107',
    '#311B92',
    '#E1F5FE',
    '#F9FBE7',
    '#FFD600',
    '#1E88E5',
    '#E3F2FD',
    '#AA00FF',
    '#FF4081',
    '#3F51B5',
    '#1A237E',
    '#E8EAF6',
    '#64FFDA',
    '#C0CA33',
    '#FFB300',
    '#90CAF9',
    '#B2DFDB',
    '#FFC400',
    '#AB47BC',
    '#82B1FF',
    '#BBDEFB',
    '#3949AB',
    '#F50057',
    '#E0F7FA',
    '#FFEB3B',
    '#FDD835',
    '#FF8F00',
    '#80D8FF',
    '#AFB42B',
    '#B388FF',
    '#FFF59D',
    '#B9F6CA',
    '#E040FB',
    '#0277BD',
    '#00897B',
    '#5C6BC0',
    '#00BFA5',
    '#FFCA28',
    '#81D4FA',
    '#2962FF',
    '#1E88E5',
    '#F1F8E9',
    '#81C784',
    '#7986CB',
    '#311B92',
    '#FFFDE7',
    '#0288D1',
    '#FFF9C4',
    '#01579B',
    '#5E35B1',
    '#F57F17',
    '#01579B',
    '#C5E1A5',
    '#E0F2F1',
    '#00B8D4',
    '#A5D6A7',
    '#9CCC65',
    '#1A237E',
    '#4CAF50',
    '#004D40',
    '#FFEB3B',
    '#C8E6C9',
    '#E1BEE7',
    '#FFD600',
    '#F0F4C3',
    '#00BCD4',
    '#FFD54F',
    '#F3E5F5',
    '#3D5AFE',
  ];
  private variableSubscription: Subscription;
  columns: any[];
  varible: any = "64544370b173c33ba85c9522";
  constructor(
    private http: HttpClient,
    private formService: FormService,
    private kanbanService: KanbanService
  ) {
    this.variableSubscription = this.kanbanService.variable$.subscribe((variable) => {
      {
        this.varible = variable
        this.getCards()
        console.log(variable)

      }
    });
  }

  ngOnInit() {

    this.getCards();
    this.formService.getMetadata(this.kanban.enumeration).subscribe((data) =>
      data.forEach((element) => {
        if (element.name === this.kanban.desiredEnum) {
          this.columns = element.references;
        }

      })
    );
  }

  getCards() {
    this.http.get<any[]>(this.kanban.endpoint + this.varible).subscribe(
      (data) => {
        this.cards = data;
        console.log(this.cards);

      },
      (error) => {
        console.error(error);
      }
    );
  }

  onCardDrop(event: CdkDragDrop<any[]>, column: string) {
    console.log(column);
    this.iteamDraged = event.item.data;
    this.iteamDraged[this.kanban.desiredEnum] = column;
    console.log(this.iteamDraged);
    this.changeObjectStatus(this.kanban.updateEndpoint, this.iteamDraged);
  }

  getCardsCount(column: string): number {
    return this.cards.filter((card) => card[this.kanban.desiredEnum] === column)
      .length;
  }
  changeObjectStatus(endpoint: string, object?: any) {
    console.log("aaaaaaaaaaaaa")
    this.kanbanService.updateTaskStatus(endpoint, object).subscribe((response: any) => {
      console.log(response);

    });
  }

  onColumnDrop(event: CdkDragDrop<string[]>) {
    const prevIndex = event.previousIndex;
    const newIndex = event.currentIndex;
    moveItemInArray(this.columns, prevIndex, newIndex);
  }
}
