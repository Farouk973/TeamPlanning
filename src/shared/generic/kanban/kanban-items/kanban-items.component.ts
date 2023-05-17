import { Component, Input, OnInit } from '@angular/core';
import { Kanbanbord } from '../../models/kanban.model';
import { HttpClient } from '@angular/common/http';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'app-kanban-items',
  templateUrl: './kanban-items.component.html',
  styleUrls: ['./kanban-items.component.css']
})
export class KanbanItemsComponent implements OnInit {
      @Input() kanbanbord!: Kanbanbord
      events: any[] = [];
      eventsList: any[] = [];

      divDetails : boolean = false;
      element!: any;
  constructor(private http: HttpClient ,private kanabanservice : KanbanService) {}

  ngOnInit(): void {
    this.KanbanEvents()
    this.kanabanservice.lancerAction(this.events[0].id);

      }
      KanbanEvents() {    
        this.http.get<any[]>(this.kanbanbord.endpoint).subscribe((data) => {
          this.events = data;    
        })
      }
      KanbanEventsList() {
        this.eventsList = null;    
        this.http.get<any[]>(this.kanbanbord.endpointList + this.element.id ).subscribe((data) => {
          this.eventsList = data;
          console.log(this.events)
    
        })
      }
      showDivDetails(element:any){
        this.kanabanservice.lancerAction(element.id);
        this.element = element;
        this.divDetails = ! this.divDetails
        this.KanbanEventsList()
      }
      hideDivDetails(){
        this.divDetails = ! this.divDetails
      }
}
