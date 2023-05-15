import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-action-catalogue',
  templateUrl: './action-catalogue.component.html',
  styleUrls: ['./action-catalogue.component.css']
})
export class ActionCatalogueComponent implements OnInit {
@Input() element?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
